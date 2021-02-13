import styled from "@emotion/styled";
import React, { Fragment, useState } from "react";
import { primary, secondary } from "../constants/colors";
import { Button, Card, Input, Typography } from "../styled-components";

const StyledCard = styled(Card)`
  margin: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled(Typography)`
  color: ${primary};
  margin-bottom: 39px;
`;

const Btn = styled(Button)`
  margin-top: 20px;
`;

const Error = styled(Typography)`
  color: ${secondary};
  margin-bottom: 10px;
`;

const Loading = styled(Typography)`
  color: ${primary};
  margin-bottom: 10px;
`;

const CardForm = () => {
  const [zipCode, setZipCode] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleValidate = async () => {
    if (zipCode) {
      setLoading(true);
      setError("");
      fetch(
        `${process.env.NEXT_PUBLIC_API_CARTO_URL}/codes-postaux/communes/${zipCode}`
      )
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          if (data.code === 400) {
            setError(data.message.codePostal.msg);
          }
          if (data.length > 0) {
            setCity(data[0].nomCommune);
          }
        })
        .catch((err) => {
          console.log("err :>> ", err);
          setLoading(false);
        });
    }
  };

  return (
    <StyledCard>
      <Title variant="xl">
        Recevez les règles d’urbanisme pour votre ville !
      </Title>
      {loading && <Loading variant="sm">Chargement en cours...</Loading>}
      {error && <Error variant="sm">{error}</Error>}
      {city ? (
        <Fragment>
          <Typography>Le guide de l’urbanisme à {city}</Typography>
          <Btn onClick={() => setCity("")}>Retour</Btn>
        </Fragment>
      ) : (
        <Fragment>
          <Input
            type="number"
            value={zipCode}
            placeholder="Enter votre code postal"
            onChange={(e) => setZipCode(e.target.value)}
          />
          <Btn onClick={handleValidate}>Valider</Btn>
        </Fragment>
      )}
    </StyledCard>
  );
};

export default CardForm;
