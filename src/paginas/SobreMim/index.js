import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpeg";

const SobreMim = () => {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Gamas!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Antônio Evaldo sorrindo"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Olá, me chamo Gabriel Almeida de Moura Alves e vou contar um pouco sobre
        mim e sobre como vim parar no mundo da programação.
      </p>
      <p className={styles.paragrafo}>
        Desde sempre eu fui apaixonado pelo mundo dos cálculos, sempre sonhei em
        ser engenheiro. Fiz a falculdade de engenharia elétrica e finalmente
        pude ser feliz... Só que não.
      </p>
      <p className={styles.paragrafo}>
        Quando me formei trabalhei na área mas percebi que não era isso que eu
        queria ser, MAS esses 5 anos de estudos serviram para me mostrar não só
        a área que eu não queria seguir, mas também a que eu queria. No meio de
        todas as matérias tiveram duas que me maracaram muito que foram
        Programação 1 e 2, apesar de ser bem o básico de tudo, me vi em mundo
        onde pude colocar toda minha criatividade e raciocínio em um só lugar.
      </p>
      <p className={styles.paragrafo}>
        Já tendo sentido isso tudo, decidir virar a chave e me tornar um
        DESENVOLVEDOR. Pesquisando sobre a área eu escolhi a parte do Front-End
        e desde então eu venho estudando muito, dia a dia, para chegar em um
        resultado que ainda estou construindo e evoluindo.
      </p>
    </PostModelo>
  );
};

export default SobreMim;
