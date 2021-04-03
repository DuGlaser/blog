import styled from '@emotion/styled';

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const StyledImg = styled.img`
  height: 100%;
  border: none;
  border-radius: 50%;
`;

export const Avatar: React.VFC<Props> = ({ ...props }) => {
  return <StyledImg {...props} />;
};
