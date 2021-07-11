import React from 'react';
import LayoutDefault from '../__layoutDefaut';
import Header from '../../Components/Header';
import senhas from './senhas.jpg';
import slug from './slug.jpg';

const Sexta09 = () => {
  return (
    <>
    <Header />
    <LayoutDefault date='09/07/2021'>
      <h2 className='title'>Slug da empresa</h2>
      <div className='tags'>
        <span className='tag novo'>novo</span>
        <span className='tag melhoria'>melhoria</span>
      </div>
      <div className='content'>
        <p className='description'>
          Slug é uma pagina personalizada da empresa, onde a pessoa fisica se candidata a uma vaga aberta.
        </p>
        <ul className='itens'>
          <li className='item'>* Cadastro empresa tem uma pagina de slug propria</li>
        </ul>
        <div className='contentImage'>
          <img src={slug} alt='slug' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada quando em perfil de empresa, basta vc clicar no link abaixo de "Vagas disponiveis" 
            <a href='https://app.worc.com.br/inicio'>https://app.worc.com.br/inicio</a>
          </p>
        </div>
      </div>
    </LayoutDefault>
    <LayoutDefault>
      <h2 className='title'>Dados de login</h2>
      <div className='tags'>
        <span className='tag melhoria'>melhoria</span>
      </div>
      <div className='content'>
        <p className='description'>
        O avatar da pagina principal do candidato não estava sendo mostrado, resolvemos e agora o avatar está sendo mostrado
        </p>
        <ul className='itens'>
          <li className='item'>* Cadastro de candidato</li>
          <li className='item'>* Cadastro de empresas</li>
          <li className='item'>* No login</li>
          <li className='item'>* Esqueci minha senha</li>
        </ul>
      </div>
      <div className='contentImage'>
        <img src={senhas} alt='senhas' />
      </div>
      <div className='accessInfo'>
        <p>
          Está pagina pode ser acessada na pagina de login da app.worc <a href='https://app.worc.com.br/busca'>https://app.worc.com.br/</a>
        </p>
      </div>
    </LayoutDefault>
    <LayoutDefault>
      <h2 className='title'>Abrir nova vaga</h2>
      <div className='tags'>
        <span className='tag melhoria'>melhoria</span>
      </div>
      <div className='content'>
        <p className='description'>
        Retiramos a opção de cadastro como CLT FLEX, pois ainda não é possivel ter candidatos como CLT FLEX nesse momento.
        </p>       
      </div>    
    </LayoutDefault>
    <LayoutDefault>
      <h2 className='title'>link para acessar Curriculo</h2>
      <div className='tags'>
        <span className='tag block'>bloqueado</span>
      </div>
      <div className='content'>
        <p className='description'>
          Link para acessar curriculo está levando pro nada.
        </p> 
        <p className='description'>
          Precisaremos mover a pasta do antigo servidor para o novo, isso leva um tempo por ser um processo manual.
        </p>       
      </div>    
    </LayoutDefault>
    <LayoutDefault>
      <h2 className='title'>Avatar do candidato</h2>
      <div className='tags'>
        <span className='tag bug'>bug</span>
      </div>
      <div className='content'>
        <p className='description'>
        O avatar da pagina principal do candidato não estava sendo mostrado, resolvemos e agora o avatar está sendo mostrado
        </p>
        <ul className='itens'>
          <li className='item'>* Avatar Principal</li>
          <li className='item'>* Avatar no menu do topo</li>
        </ul>
      </div>
    </LayoutDefault>
    <LayoutDefault>
      <h2 className='title'>Editar uma vaga</h2>
      <div className='tags'>
        <span className='tag bug'>bug</span>
      </div>
      <div className='content'>
        <p className='description'>
          Não estava sendo possivel editar uma vaga, resolvemos isso e agora todas as vagas podem ser editadas
        </p>
        {/*<ul className='itens'>
          <li className='item'>* Editar vaga</li>
          <li className='item'>* Avatar no menu do topo</li>
        </ul>
        <div className='contentImage'>
          <img src={buscaNews} alt='buscanews' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada quando em perfil de empresa, vc clicar em buscar cadidadato 
            <a href='https://app.worc.com.br/busca'>https://app.worc.com.br/busca</a>
          </p>
        </div> */}
      </div>
    </LayoutDefault>
    <LayoutDefault>
      <h2 className='title'>Fluxo de chamar para entrevista</h2>
      <div className='tags'>
        <span className='tag bug'>bug</span>
      </div>
      <div className='content'>
        <p className='description'>
        Quando a empresa estava chamando para entrevista,  botão "enviar" estava retornando erro, resolvemos e o fluxo de agendar entrevista está 100%
        </p>
        <ul className='itens'>
          <li className='item'>* Pop-up na home do candidato</li>
          <li className='item'>* Se não houver data o pop-up agora não aparece</li>
          <li className='item'>* Se não escolher uma data o botão aceitar não habilita</li>
        </ul>
      </div>
    </LayoutDefault>
    <LayoutDefault>
      <h2 className='title'>Cadastro de candidato</h2>
      <div className='tags'>
        <span className='tag bug'>bug</span>
      </div>
      <div className='content'>
        <p className='description'>
        O Canditado quando tentava alterar o cadastro, mas sua data de nascimento estava vazia, retornava erro ao finalizar, resolvemos deixando esse campo opcional
        </p>
        <ul className='itens'>
          <li className='item'>* Cadastro novo de candidato</li>
          <li className='item'>* Atualizar cadastro de candidato</li>
        </ul>
      </div>
    </LayoutDefault>
    <LayoutDefault>
      <h2 className='title'>Numero de vagas</h2>
      <div className='tags'>
        <span className='tag bug'>bug</span>
      </div>
      <div className='content'>
        <p className='description'>
        O Numero de vagas abertas com o numero de vagas que era mostrado na Home da empresa, estava divergente, resolvemos e agora os numeros estão corretos
        </p>
      </div>
    </LayoutDefault>
    <LayoutDefault>
      <h2 className='title'>Novos clientes</h2>
      <div className='tags'>
        <span className='tag bug'>bug</span>
      </div>
      <div className='content'>
        <p className='description'>
        O email agora está cadastrando somente letras minuculas, resolvendo o problema de letras maiusculas nos emails
        </p>
      </div>
    </LayoutDefault>
    <LayoutDefault>
      <h2 className='title'>Hot List</h2>
      <div className='tags'>
        <span className='tag bug'>bug</span>
      </div>
      <div className='content'>
        <p className='description'>
          A imagem do candidato em hotlist e pop-up dentro do hotlist, estavam diferentes, alteramos para os dois serem os mesmos
        </p>
      </div>
    </LayoutDefault>
    </>
  );
}
 
export default Sexta09;