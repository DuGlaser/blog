import styled from '@emotion/styled';

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const StyledImg = styled.img`
  height: 100%;

  border-radius: 50%;
  border: none;
`;

export const Avatar: React.VFC<Props> = ({ ...props }) => {
  return <StyledImg {...props} />;
};
