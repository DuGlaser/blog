import styled from '@emotion/styled';

import { ModalDecorator } from '@/components/atoms';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ButtonWrapper = styled.div`
  & :first-of-type {
    margin-right: 1rem;
  }
`;

export const TitleWrapper = styled.div`
  flex: 1;
  margin: 0 2rem 0 0;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  overflow-y: auto;
`;

export const EditorWrapper = styled.div`
  width: 100%;
`;

export const Border = styled.div`
  width: 3px;
  height: 100%;
  background-color: ${(props) => props.theme.color.base};
  opacity: 0.3;
`;

export const FloatingWindowWrapper = styled.div`
  position: absolute;
  right: 24px;
  bottom: 24px;
`;

export const Modal = styled(ModalDecorator)`
  position: relative;
  &__Overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &__Content {
    position: absolute;
    top: 50%;
    right: auto;
    bottom: auto;
    left: 50%;
    margin-right: -50%;
    padding: 1.5rem 2rem;
    overflow: auto;
    background: ${(props) => props.theme.color.base};
    border-radius: 8px;
    outline: none;
    transform: translate(-50%, -50%);
  }
`;

export const ModalCloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
`;

export const ModalTitle = styled.span`
  display: inline-block;
  margin-bottom: 0.8rem;
  color: ${(props) => props.theme.color.white};
  font-weight: bold;
  font-size: 1.5rem;
`;

export const FloatingWindowText = styled.div`
  padding: 0.5rem 2rem;
`;
