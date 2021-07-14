import styled from "@emotion/styled";

export const BackDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 2000;
`;

export const ImageContainer = styled.div`
position: absolute;
    display: inline-block;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
`;

export const LargeImg = styled.img`
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);    
`;