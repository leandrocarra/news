import React from 'react';
import LayoutDefault from '../__layoutDefaut';
import Header from '../../Components/Header';
import calendly from './calendly.jpg';
import cursos from './cursos.png';
import employee_slug from './employee_slug.png';
import ponto_eletronico from './ponto_eletronico.png';
import pop_resultado_entrevista from './pop_resultado_entrevista.png';
import slug_restaurante from './slug_restaurante.png';
import pin from './pin.jpg';
import carousel from './carrousel.png';


const Sexta23 = () => {
  return (
    <>
      <Header />
      <LayoutDefault  date='23/07/2021'>
        <h2 className='title'>Adicionado pop-up de finalização de entrevista.</h2>
        <div className='tags'>
          <span className='tag novo'>novo</span>
        </div>
        <div className='content'>
          <p className='description'>
            Possibilidade da empresa posicionar o resultado da entrevista com o candidato. <br />
          </p>

          <div className='contentImage'>
            <img src={pop_resultado_entrevista} alt='pop_entrevista' />
          </div>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'>Slug do Restaurante.</h2>
        <div className='tags'>
          <span className='tag novo'>novo</span>
        </div>
        <div className='content'>
          <p className='description'>
            Adicionada aágina de Slug do Restaurante ao botão 'Minha página slug' na página de iníco de empresa.
          </p>

          <div className='contentImage'>
            <img src={slug_restaurante} alt='pop_entrevista' />
          </div>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'>Cadastro de Employee através do Slug do Restaurante</h2>
        <div className='tags'>
          <span className='tag novo'>novo</span>
        </div>
        <div className='content'>
          <p className='description'>
            Conceito de employee: Funcionário contratado da empresa.<br />
            Possibilidade de fazer o cadastro na página de Slug do Restaurante, onde envia uma solicitação para o Restaurante
            aprovar ou recusar o funcionário.<br />
          </p>
          <div className='contentImage'>
            <img src={employee_slug} alt='pop_entrevista' />
          </div>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'>Adicionado Módulo de Cursos</h2>
        <div className='tags'>
          <span className='tag novo'>novo</span>
        </div>
        <div className='content'>
          <p className='description'>
            Possibilidade de cadastrar Cursos, que contém módulos e aulas. <br />
          </p>
          <ul className='itens'>
            <li className='item'>Possibilidade de associar um Curso a uma Empresa;</li>
            <li className='item'>Possibilidade setar um Curso apenas para Employees de uma empresa;</li>
            <li className='item'>Possibilidade de associar uma Prova a um Curso;</li>
            <li className='item'>Possibilidade de associar uma Prova a um Módulo;</li>
            <li className='item'>Possibilidade de associar uma Prova a uma Aula.</li>
            <li className='item'>Possibilidade de adicionar Vídeos Vimeo e Youtube às aulas</li>
          </ul>
          <div className='contentImage'>
            <img src={cursos} alt='pop_entrevista' />
          </div>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'> Primeira Versão 1.0 de Ponto Eletrônico</h2>
        <div className='tags'>
          <span className='tag novo'>novo</span>
        </div>
        <div className='content'>
          <p className='description'>
            Conceito de employee: Funcionário contratado da empresa.<br />
            Possibilidade de fazer o cadastro na página de Slug do Restaurante, onde envia uma solicitação para o Restaurante
            aprovar ou recusar o funcionário.<br />
          </p>

          <ul className='itens'>
            <li className='item'>Entrevista</li>
            <li className='item'>Modal</li>
          </ul>
          <div className='contentImage'>
            <img src={ponto_eletronico} alt='pop_entrevista' />
          </div>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'>Cadastro de empresa</h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            Mudamos o fluxo de cadastro de empresa, agora ao clicar em cadastro de empresa o cliente será levado a uma tela de agendamento de reunião no calendly. 
          </p>
          <ul className='itens'>
            <li className='item'>* Cadastro de empresas</li>
          </ul>
        </div>
        <div className='contentImage'>
          <img src={calendly} alt='calendly' />
        </div>
        <div className='accessInfo'>
          <p>
            Está pagina pode ser acessada na pagina de login da app.worc 
            <a href='https://calendly.com/comercial-alexandre/15min?month=2021-07'>https://calendly.com/comercial-alexandre/15min?month=2021-07/</a>
          </p>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Home de empresa</h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            Agora as fotos da home possuem um carousel de imagens que melhora a visibilidade e mostra a descrição da imagem quando existir uma.
          </p>
          <ul className='itens'>
            <li className='item'>* Home de empresas</li>
          </ul>
        </div>
        <div className='contentImage'>
          <img src={carousel} alt='carousel' />
        </div>
      </LayoutDefault>


      <LayoutDefault>
        <h2 className='title'>Adicionado filtro por Cidade na tela de Busca Ativa </h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            Antes não era possível visualizar candidatos em cidades específicas.
            Adicionado filtro na tela de Busca Ativa que permite filtrar candidatos pela cidade. <br />
          </p>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'> Responsividade na página de adicionar logo da Empresa.</h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            Interface ajustada para melhor comportamento em dispositivos móveis.
          </p>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'> Pin piriripin pin agora temos PIN</h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            O Card do candidato agora possui um pin de geolocation, que traz  distancia e o custo de locomoção até a empresa.
          </p>
        </div>
        <div className='contentImage'>
          <img src={pin} alt='pin' />
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'> Adicionado botão de enviar Whatsapp e contato ao perfil completo do candidato.</h2>
        <div className='tags'>
          <span className='tag melhoria'>melhoria</span>
        </div>
        <div className='content'>
          <p className='description'>
            Na visão de company, ao visualizar o perfil completo do usuário, agora é possível visualizar contato e chamar no
            whatsapp.
          </p>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'> Fluxo de entrevista marcada afetar Agenda e Processo Seletivo.</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            Antes, quando o candidato aceitava entrevista ele não aparecia corretamente em Agenda e Processo seletivo. <br />
            Corrigido para finalização do fluxo adicione o candidato às regras destas duas telas.
          </p>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'>Ajuste em email de Cadastro</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            Antes era possível cadastrar e-mails com letra maiúscula. Gerando cadastros iguais e ruídos na base. <br />
            Adicionada propriedade que coloca todos os caracteres com letras minusculas.
          </p>
        </div>
      </LayoutDefault>

      <LayoutDefault>
        <h2 className='title'>Ajuste em email de Cadastro</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            Antes era possível cadastrar e-mails com letra maiúscula. Gerando cadastros iguais e ruídos na base. <br />
            Adicionada propriedade que coloca todos os caracteres com letras minusculas.
          </p>
        </div>
      </LayoutDefault>

      
      <LayoutDefault>
        <h2 className='title'>Horario na agenda</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            Ao tentar abrir um horario direto na agenda retornava uma pagina com erro.<br />
            Resolvemos e agora está funcionando como esperado.
          </p>
          <ul className='itens'>
            <li className='item'>* Agenda</li>
          </ul>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Busca Ativa</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            Ao buscar qualquer coisa, não estava retornando nada.<br />
            Agora a busca está 100%.
          </p>
          <ul className='itens'>
            <li className='item'>* Buscar candidato</li>
          </ul>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Mensagem de entrevista</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            Mensagem de convite de entrevista não estava sendo enviada para os admins.<br />
            Agora todos recebem zapzap!
          </p>
          <ul className='itens'>
            <li className='item'>* Entrevista</li>
          </ul>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Tela de agendamento de entrevistas</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            No pop-up de agendamento, não estava aparecendo o nome da empresa, não estava trazendo horario de descanso e o botão aceitar não aparecia em alguns casos.<br />
            Resolvemos tudo e o modal está 100%
          </p>
          <ul className='itens'>
            <li className='item'>* Entrevista</li>
            <li className='item'>* Modal</li>
          </ul>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Datas antigas no modal</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            O modal de entrevistas estava trazendo datas passadas.<br />
            Agora somente datas validas está sendo mostrado
          </p>
          <ul className='itens'>
            <li className='item'>* Entrevista</li>
            <li className='item'>* Modal</li>
          </ul>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Vagas desativadas</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            Candidatos estavam sendo chamados para vagas que estavam desativadas.<br />
            Agora só aparecem vagas ativa em chamar para entrevista
          </p>
          <ul className='itens'>
            <li className='item'>* Entrevista</li>
            <li className='item'>* Vagas</li>
          </ul>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Busca</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            Em busca, quando o mapa estava aberto, a empresa não estava conseguindo chamar para entrevista<br />
            Esse fluxo foi normalizado
          </p>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Mensagem de entrevista</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            Layout da mensagem que vai no zap zap pro candidato estava feio<br />
            Retocamos e agora ele está lindo.
          </p>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Provas</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            textos muito grandes quebravam o layout<br />
            Deixamos um brinco
          </p>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Processo seletivo</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            Candidatos que vinham do slug não passavam para chamados para entrevista.<br />
            O fluxo foi normalizado
          </p>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Processo seletivo</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            Sueridos pela worc não estava adicionando para coluna candidato.<br />
            Agora está
          </p>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Vagas</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            O candidato quando erá chamado para uma vaga, não entrava no processo seletivo.<br />
            Agora está em tudo que é possivel. "voa candidato"
          </p>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Vagas</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            Em alguns casos não estava sendo possivel criar vagas.<br />
            O fluxo está normalizado.
          </p>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Vagas</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            Em alguns casos não estava sendo possivel criar vagas.<br />
            O fluxo está normalizado.
          </p>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Perfil</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            Em alguns casos o funcionamento do perfil estava erratico.<br />
            Perfil está completo.
          </p>
        </div>
      </LayoutDefault>
      <LayoutDefault>
        <h2 className='title'>Edição Candidato</h2>
        <div className='tags'>
          <span className='tag bug'>bug</span>
        </div>
        <div className='content'>
          <p className='description'>
            Perfil do candidato quando em certos endereços, estava com problemas.<br />
            Normalizamos a biblioteca de ceps
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
    </>
  );
}
 
export default Sexta23;