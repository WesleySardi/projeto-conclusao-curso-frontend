import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { useScreenPositionContext } from "../../context/ScreenPositionProvider";

import ErrorPopUp from "../popup/ErrorPopup";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  background-image: url("../img/backgrounds/wallpaperWorld.jpg");
`;

const TitleContainerPaid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TitlePaid = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 30px;
  color: white;
  width: 60%;
`;

const ImagePaid = styled.img`
  width: 150px;
  border-radius: 4px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 750px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-right: 20px;
  border-right: 1px solid #ccc;
`;

const CardInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 20px;
  border-radius: 8px;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
`;

const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ItemPrice = styled.div`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-top: auto;
`;

const ItemImage = styled.img`
  width: 100%;
  max-width: 150px;
  border-radius: 4px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;

const BuyBracelet = () => {
  const { braceletValue, braceletColor } = useScreenPositionContext();
  const [quantity, setQuantity] = useState(1);
  const [quantityParcelas, setQuantityParcelas] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [urlPath] = useState(window.location.pathname.slice(1));
  const [errors, setErrors] = useState({});
  const pricePerItem = braceletValue;
  const totalPrice = (quantity * pricePerItem).toFixed(2);
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [popupType, setPopupType] = useState("loading");
  const [popupTitle, setPopupTitle] = useState("Carregando");
  const [popupText] = useState("Compra realizada com sucesso!");
  const [paymentCondition, setPaymentCondition] = useState(false);
  const hasDownloaded = useRef(false);

  useEffect(() => {
    if (urlPath === "downloadApp" && !hasDownloaded.current) {
      hasDownloaded.current = true;

      const fileUrl =
        "https://zlo-mobile.s3.us-east-1.amazonaws.com/app-release.apk";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "app-release.apk";
      link.click();

      console.log("Download iniciado!");
    }
  }, [urlPath]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^\(\d{2}\) \d{5}-\d{4}$/;
    return re.test(phone);
  };

  const formatPhoneNumber = (value) => {
    const phoneValue = value.replace(/\D/g, "");
    if (phoneValue.length >= 11) {
      return `(${phoneValue.slice(0, 2)}) ${phoneValue.slice(
        2,
        7
      )}-${phoneValue.slice(7, 11)}`;
    } else if (phoneValue.length >= 7) {
      return `(${phoneValue.slice(0, 2)}) ${phoneValue.slice(
        2,
        7
      )}-${phoneValue.slice(7)}`;
    } else if (phoneValue.length > 2) {
      return `(${phoneValue.slice(0, 2)}) ${phoneValue.slice(2)}`;
    } else {
      return value;
    }
  };

  const formatCardNumber = (value) => {
    const cardValue = value.replace(/\D/g, "").slice(0, 16);
    const formattedValue = cardValue
      .match(/.{1,4}/g)
      ?.join(" ")
      .trim();
    return formattedValue || "";
  };

  const formatExpiryDate = (value) => {
    const dateValue = value.replace(/\D/g, "");
    if (dateValue.length >= 2) {
      return `${dateValue.slice(0, 2)}/${dateValue.slice(2, 4)}`;
    } else {
      return dateValue;
    }
  };

  const formatCvv = (value) => {
    const cvvValue = value.replace(/\D/g, "");
    return cvvValue.slice(0, 3);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setPopupTitle("Carregando");
    setPopupType("loading");

    const validationRules = [
      {
        field: "name",
        value: name,
        validation: (value) => value && !/\d/.test(value),
        errorMessage: "O nome é obrigatório e não pode conter números.",
      },
      {
        field: "email",
        value: email,
        validation: validateEmail,
        errorMessage: "Email inválido.",
      },
      {
        field: "phone",
        value: phone,
        validation: validatePhone,
        errorMessage: "Telefone inválido.",
      },
      {
        field: "address",
        value: address,
        validation: (value) => value,
        errorMessage: "O endereço é obrigatório.",
      },
      {
        field: "cardNumber",
        value: cardNumber.replace(/\s+/g, ""), // Remove os espaços para armazenar apenas os números
        validation: (value) =>
          value && /^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber),
        errorMessage:
          "O número do cartão é obrigatório e deve ter 16 dígitos no formato correto (XXXX XXXX XXXX XXXX).",
      },
      {
        field: "expiryDate",
        value: expiryDate,
        validation: (value) => value && /^\d{2}\/\d{2}$/.test(value),
        errorMessage:
          "A data de validade é obrigatória e deve estar no formato MM/AA.",
      },
      {
        field: "cvv",
        value: cvv,
        validation: (value) => value && /^\d{3}$/.test(value),
        errorMessage: "O CVV é obrigatório e deve ter 3 dígitos.",
      },
    ];

    const validationErrors = validationRules.reduce((errors, rule) => {
      if (!rule.validation(rule.value)) {
        errors[rule.field] = rule.errorMessage;
      }
      return errors;
    }, {});

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsPopupActive(true);
      setErrors({});
      setQuantity(1);
      setQuantityParcelas(1);
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setCardNumber("");
      setExpiryDate("");
      setCvv("");

      setTimeout(async () => {
        setPopupTitle("Sucesso");
        setPopupType("success");
        setPaymentCondition(true);

        await axios.get(
          `http://zlo-main-app.us-east-1.elasticbeanstalk.com/api/email/sendQrCode?toEmail=${encodeURIComponent(
            email
          )}`
        );
      }, 3000);
    }
  };

  const handleNameChange = (e) => {
    const input = e.target.value;

    const sanitizedInput = input.replace(/[^a-zA-Z\s]/g, "");
    setName(sanitizedInput);
  };

  return (
    <FormContainer>
      {urlPath === "downloadApp" ? (
        <>
          <TitleContainerPaid>
            <TitlePaid>Aplicativo baixado com sucesso.</TitlePaid>
            <ImagePaid
              src="../img/icones/successIcon.png"
              alt="Imagem de sucesso"
            />
          </TitleContainerPaid>
        </>
      ) : paymentCondition ? (
        <>
          <TitleContainerPaid>
            <TitlePaid>
              Compra finalizada! Verifique seu e-mail para maiores informações.
            </TitlePaid>
            <ImagePaid
              src="../img/icones/successIcon.png"
              alt="Imagem de sucesso"
            />
          </TitleContainerPaid>
        </>
      ) : (
        <>
          {isPopupActive ? (
            <ErrorPopUp
              onClose={() => {
                setIsPopupActive(false);
                document.documentElement.style.overflowY = "auto";
                document.body.style.overflowY = "auto";
              }}
              title={popupTitle}
              text={popupText}
              popupType={popupType}
            />
          ) : (
            <></>
          )}
          <Title>Informações de Pagamento</Title>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Digite seu nome completo"
                required
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
                required
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                placeholder="(47) 99999-9999"
                maxLength={15}
                required
              />
              {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}

              <Label htmlFor="address">Endereço de Entrega</Label>
              <Input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Digite seu endereço completo"
                required
              />
              {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}

              <Label htmlFor="quantity">Quantidade</Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                max="10"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Digite a quantidade desejada"
                required
              />

              <Label htmlFor="quantityParcelas">Quantidade de Parcelas</Label>
              <Input
                id="quantityParcelas"
                type="number"
                min="1"
                max="12"
                value={quantityParcelas}
                onChange={(e) => setQuantityParcelas(e.target.value)}
                placeholder="Digite a quantidade desejada"
                required
              />
              <SubmitButton type="submit">Finalizar Compra</SubmitButton>
            </InputGroup>

            <CardInfoGroup>
              <Label htmlFor="cardNumber">Número do Cartão</Label>
              <Input
                id="cardNumber"
                type="text"
                value={formatCardNumber(cardNumber)}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Digite o número do cartão"
                maxLength={19}
                required
              />
              {errors.cardNumber && (
                <ErrorMessage>{errors.cardNumber}</ErrorMessage>
              )}

              <Label htmlFor="expiryDate">Data de Validade</Label>
              <Input
                id="expiryDate"
                type="text"
                value={formatExpiryDate(expiryDate)}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/AA"
                maxLength={5}
                required
              />
              {errors.expiryDate && (
                <ErrorMessage>{errors.expiryDate}</ErrorMessage>
              )}

              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                type="text"
                value={formatCvv(cvv)}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="Digite o CVV"
                maxLength={3}
                required
              />
              {errors.cvv && <ErrorMessage>{errors.cvv}</ErrorMessage>}

              <ItemPrice>Valor Total: R$ {totalPrice}</ItemPrice>

              <ItemImage
                src={
                  braceletColor === "red"
                    ? "../img/cards/braceletRed.png"
                    : braceletColor === "green"
                    ? "../img/cards/braceletGreen.png"
                    : "../img/cards/braceletBlue.png"
                }
                alt="Imagem do item"
              />
            </CardInfoGroup>
          </Form>
        </>
      )}
    </FormContainer>
  );
};

export default BuyBracelet;
