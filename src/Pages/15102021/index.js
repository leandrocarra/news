import React from 'react';
import LayoutDefault from '../__layoutDefaut';
import Header from '../../Components/Header';

import match from './match.jpg';
import modal from './modal.png';
import resultado from './resultado.png';
import map from './map.png';
import bait from './bait.png';
import engamja from './engamja.png';
import bugs from './bugs.png';
import bugs2 from './bugs2.png';
import bugs3 from './bugs3.png';


const Sexta1510 = () => {
  return (
    <>
      <Header />
      <LayoutDefault  date='15/10/2021'>
        <h2 className='title'>Não somos o Tinder, mas o MATCH é PERFEITO, colocamos em produção substituindo o Hotlist, o novissimo Match Perfeito, que traz para o cliente a melhor escolha para a vaga.</h2>
        <div className='tags'>
          <span className='tag novo'>novo</span>
        </div>
        <div className='content'>
          <p className='description'>
            Match entre vaga e candidato <br />
          </p>
        </div>
        <div className='contentImage'>
          <img src={match} alt='match' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na opção vagas na pagina da empresa
            <a href='https://app.worc.com.br/vagas/1648/candidatos'>https://app.worc.com.br/vagas/1648/candidatos/</a>
          </p>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>O Melhor modal de entrevista do mercado está com cara nova</h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            Reformulamos o modal para a melhor UX possivel.
          </p>
        </div>
        <div className='contentImage'>
          <img src={modal} alt='modal' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na home do candidato. 
            <a href='https://app.worc.com.br/inicio'>https://app.worc.com.br/inicio/</a>
          </p>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>O Melhor modal de resultado de entrevista do mercado está com cara nova</h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            Reformulamos o modal para a melhor UX possivel.
          </p>
        </div>
        <div className='contentImage'>
          <img src={resultado} alt='resultado' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na home da empresa. 
            <a href='https://app.worc.com.br/inicio'>https://app.worc.com.br/inicio/</a>
          </p>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>O que é bom é pra se mostrar, retiramos as margens do site, deixando ele ocupar toda area disponiel da tela. </h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            A tela agora é full largura, aumentando as areas de navegação.
          </p>
        </div>
        <div className='contentImage'>
          <img src={map} alt='map' />
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Vcs pediram e nós atendemos, criamos uma forma de simular "campanhas" nas paginas da slug usando #nomeDaCampanha </h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            A ideia é compartilhar e rastrear os candidatos que entrarem com essa #
          </p>
        </div>
        <div className='contentImage'>
          <img src={bait} alt='bait' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na slug da empresa
            <a href='https://app.worc.com.br/inicio'>https://app.worc.com.br/inicio/</a>
          </p>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Como está o seu nível de engajamento?</h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            Quando maior o nivel, mais será facil da worc fazer o match perfeito.
          </p>
        </div>
        <div className='contentImage'>
          <img src={engamja} alt='engamja' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na home do candidato
            <a href='https://app.worc.com.br/inicio'>https://app.worc.com.br/inicio/</a>
          </p>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Essas foram nossas tasks de bugs</h2>
        <div className='tags'>
          <span className='tag bug'>Bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            Apesar de ser extensa, não foram colocadas todas, pois as tarefas mais urgentes, nem sempre tem tasks criadas.
          </p>
        </div>
        <div className='contentImage'>
          <img src={bugs} alt='bugs' />
          <img src={bugs2} alt='bugs2' />
          <img src={bugs3} alt='bugs3' />
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Criação de vaga com link para o MEET ONLINE</h2>
        <div className='tags'>
          <span className='tag block'>bloqueado</span>
        </div>
        <div className='content'>
          <p className='description'>
            Devido a algumas imposições que o google faz com as contas, está bem dificil acharmos uma solução para isso, mas nosso time está trabalhando e pensando fora da caixa para que isso aconteça de um jeito ou de outro
          </p> 
        </div>    
      </LayoutDefault>
    </>
  );
}
 
export default Sexta1510;