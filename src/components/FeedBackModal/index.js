import  {Container, Content, CloseModalButton, Buttons} from './styles.js';
import { useSpring, animated } from 'react-spring';

import { useHistory } from 'react-router-dom';

const FeedBackModal = ({ showModalDelete, setShowModalDelete, deleteNaver, data, del, showModal, setShowModal, setLoading, setLoadApi }) => {
  const history = useHistory();
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModalDelete || showModal ? 1 : 0,
    transform: showModalDelete || showModal ? `translateX(0%)` : `translateX(-100%)`
  });


  const back = () => {
    if(showModalDelete){
      setShowModalDelete(false);
      setLoading(true);
      setLoadApi(true);
      history.push('/home');
    }else if(showModal){
      setShowModal(false);
      history.push('/home');
    }
    
  }

  return (
    <>
      {showModal || showModalDelete ? (
        <Container>
          <animated.div style={animation}>
            <Content>
              <h1>{data.warning}</h1>
              <p>{data.message}</p>
                <CloseModalButton
                  onClick={() => back()}
                  del={del}
                />
                {del ? (
                  <Buttons>
                    <button  onClick={() => setShowModalDelete(false)}>Cancelar</button>
                    <button onClick={() => deleteNaver(del)}>Excluir</button>
                  </Buttons>
                ) : null}
            </Content>
          </animated.div>
        </Container>   
      ) : null}
    </>
  );
}


export default FeedBackModal;