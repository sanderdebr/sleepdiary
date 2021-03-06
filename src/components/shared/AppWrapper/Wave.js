import styled, { useTheme } from "styled-components";

function Wave() {
  const theme = useTheme();
  return (
    <WaveWrapper theme={theme}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={theme.palette.bg}
          d="M0,160L26.7,154.7C53.3,149,107,139,160,154.7C213.3,171,267,213,320,213.3C373.3,213,427,171,480,165.3C533.3,160,587,192,640,202.7C693.3,213,747,203,800,181.3C853.3,160,907,128,960,106.7C1013.3,85,1067,75,1120,74.7C1173.3,75,1227,85,1280,96C1333.3,107,1387,117,1413,122.7L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
    </WaveWrapper>
  );
}

const WaveWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.bgColor};
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  svg {
    width: 100%;
  }
`;

export default Wave;
