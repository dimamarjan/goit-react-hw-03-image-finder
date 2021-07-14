import styled from "@emotion/styled";

export const BackDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 2000;
`;

export const ImageContainer = styled.div`
position: absolute;
    display: inline-block;
    top: calc(50% - 320px);
    left: 50%;
    transform: translateX(-50%);

`;

export const LargeImg = styled.img`
    height: 640px;
    border-radius: 20px;    
`;