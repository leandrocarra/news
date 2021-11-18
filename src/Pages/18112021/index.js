import React from 'react';
import LayoutDefault from '../__layoutDefaut';
import Header from '../../Components/Header';

import Ponto from './ponto.png';
import Politica from './politica.png';
import Spec from './spec.png';
import Online from './online.png';
import Bug from './bug.png';

const Sexta1811 = () => {
  return (
    <>
      <Header />
      <LayoutDefault  date='18/11/2021'>
        <h2 className='title'>Colocamos o ponto eletronico, agora todos irão poder usufruir dessa magnifca ferramenta.</h2>
        <div className='tags'>
          <span className='tag novo'>novo</span>
        </div>
        <div className='content'>
          <p className='description'>
            Politica de privacidade <br />
          </p>
        </div>
        <div className='contentImage'>
          <img src={Ponto} alt='Ponto' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na opção Escala na pagina da empresa
            <a href='https://app.worc.com.br/ponto-eletronico'>https://app.worc.com.br/ponto-eletronico/</a>
          </p>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Politica para todos, adicionamos a politica de privacidade no cadasto de candidato.</h2>
        <div className='tags'>
          <span className='tag novo'>novo</span>
        </div>
        <div className='content'>
          <p className='description'>
            Ponto Eletronico <br />
          </p>
        </div>
        <div className='contentImage'>
          <img src={Politica} alt='Politica' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na pagina de cadastro
            <a href='https://app.worc.com.br/cadastro-de-candidato'>https://app.worc.com.br/cadastro-de-candidato/</a>
          </p>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Adicionamos especialização para a vaga.</h2>
        <div className='tags'>
          <span className='tag novo'>novo</span>
        </div>
        <div className='content'>
          <p className='description'>
            Especialização <br />
          </p>
        </div>
        <div className='contentImage'>
          <img src={Spec} alt='Spec' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na pagina de cadastro
            <a href='https://app.worc.com.br/cadastro-de-candidato'>https://app.worc.com.br/cadastro-de-candidato/</a>
          </p>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Adicionamos Acessar entrevista online.</h2>
        <div className='tags'>
          <span className='tag novo'>novo</span>
        </div>
        <div className='content'>
          <p className='description'>
            Entrevista Online <br />
          </p>
        </div>
        <div className='contentImage'>
          <img src={Online} alt='Online' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na pagina de cadastro
            <a href='https://app.worc.com.br/cadastro-de-candidato'>https://app.worc.com.br/cadastro-de-candidato/</a>
          </p>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Essas foram nossas tasks de bugs</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            Algumas das tasks de bugs corrigidas..
          </p>
        </div>
        <div className='contentImage'>
          <img src={Bug} alt='Bug' />
        </div>
      </LayoutDefault>
    </>
  );
}
 
export default Sexta1811;