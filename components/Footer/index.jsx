import Paragraph from "antd/lib/typography/Paragraph";
import React from "react";

export default function Footer() {
  return (
    <div style={{ width: "80vw" }}>
      <Paragraph style={{ textAlign: "justify" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;Esse site foi desenvolvido com o objetivo ser
        divulgado em redes sociais de forma a trazer uma informação útil a
        sociedade. A origem dele é a disciplina de Computador, Ética e Sociedade
        da UFBA do ano de 2021.1. Os Autores desse conteúdo foram Edson
        Gonzalez, Mateus Romano e João Victor. O formato de site é algo de
        interesse mútuo dos integrantes e se mostrou encaixar com o objetivo.
        Todas as imagens utilizadas estão disponíveis publicamente nos canais do
        youtube de cada personalidade mostrada.
      </Paragraph>
      <Paragraph>
       Referências: https://www.youtube.com/watch?v=GvYAVti8nbk
      </Paragraph>
      <Paragraph strong style={{ textAlign: "center" }}>
        Romano Studios - 2021
      </Paragraph>
    </div>
  );
}
