import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/20127664?s=460&u=aa1223cf2e94e8bf43d8be1189377cdaf6c4eabf&v=4" alt="Jailson Silva"/>
        <div>
          <strong>Jailson Silva</strong>
          <span>Programador</span>
        </div>
      </header>
      <p>
        Apaixonado por tecnologia, e com foco na evolução humana!
        <br/><br/>
        Com o objetivo em sua vida de uma dia poder se toda uma inteligência semi-artificial,
        com a implantação de seu cerebro em um computador quantíco! Se algo se parecer com a realidade é mera conhecidêncida.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 85,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="Entrar em contato" />
            Entrar em contato
        </button>
      </footer>
  </article>
  );
}

export default TeacherItem;