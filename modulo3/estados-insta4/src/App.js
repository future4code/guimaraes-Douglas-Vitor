import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Super-Mario'}
          fotoUsuario={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpPrLVpQ2kb3pa6A2DvYLJgiOYVZOLsIq1Yrsrab2mlovf8dI714qTI9BSQg2YYNaWboQ&usqp=CAU'}
          fotoPost={'https://exame.com/wp-content/uploads/2019/12/mario-kart-tour.jpg'}
        />
        <Post
          nomeUsuario={'SubWay'}
          fotoUsuario={'https://t2.tudocdn.net/120223?w=1920'}
          fotoPost={'https://s2.glbimg.com/dLHiEFov94ONVIVLP2V85FWh7hE=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/3/t/9vl0fdRyi9SvlPOe33yA/subway-surfers-mais-baixado-downloads-decada-2010-2019.jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
