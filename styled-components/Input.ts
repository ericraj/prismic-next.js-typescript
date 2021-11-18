import styled from "@emotion/styled";

interface InputProps {
  width?: number;
  height?: number;
}

const Input = styled.input<InputProps>`
  width: ${({ width }) => width ?? 305}px;
  height: ${({ height }) => height ?? 45}px;
  min-height: ${({ height }) => height ?? 45}px;
  padding: 0 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  &:focus {
    outline-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 350px) {
    width: 100%;
  }
`;

export default Input;
