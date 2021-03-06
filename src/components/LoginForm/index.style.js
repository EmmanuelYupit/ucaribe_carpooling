import styled from 'styled-components';
import { IonRow, IonImg } from '@ionic/react';

export const Wrap = styled.div`
    position: absolute;
    left: 5%;
    top: 20%;
    width: 90%;
`;
export const FormText = styled.p`
    font-size: 10px;
`;

export const RegisterTextContainer = styled(IonRow)`
    margin-top: -10px;
`;

export const Img = styled(IonImg)`
    margin-bottom: 15%;
`;

export const TextsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
