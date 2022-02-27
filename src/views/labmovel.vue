<template>
  <div class="container" id="laboratorio-movel">
    <ol class="breadcrumb">
      <RouterLink to="/"> <i class="fa-solid fa-home fa"></i> Home </RouterLink>
      <span class="divisoria">></span>
      <RouterLink class="active" to="/labmovel">Laboratório Móvel</RouterLink>
    </ol>
    <div>
      <h2 class="titulo">Laboratório Móvel</h2>
      <div class="row informacao align-items-center">
        <div class="col-sm-4 image">
          <img class="lab-image" src="@/assets/laboratorio_movel/foto1.jpg" />
        </div>
        <div class="col-sm-8">
          <h3 class="titulo">Oque é?</h3>
          <div class="row">
            <div class="col-sm-12 text-start">
              O laboratório móvel do IFRJ, possui uma série de instrumentos
              portáteis para realizar análises físico-químicas in situ e não
              destrutivas em obras de arte. Os resultados fornecidos pelos
              instrumentos permitem caracterizar a composição química dos
              pigmentos, aglutinantes e vernizes. Entre os instrumentos do
              laboratório móvel, destaca-se o equipamento de mapeamento
              elementar, que permite investigar pinturas subjacentes. O
              laboratório móvel do IFRJ, possui um convênio de cooperação com o
              Instituto Brasileiro de Museus (IBRAM). Por isso sempre, que os
              museus da rede do IBRAM solicitam toda a instrumentação e os
              profissionais do laboratório móvel se deslocam até o museu
              solicitante.
            </div>
          </div>
        </div>
      </div>
      <div class="row informacao align-items-center">
        <div class="col-sm-8">
          <h3 class="titulo">Quais os objetivos das análises?</h3>
          <div>
            <div class="col-sm-12 text-start">
              Os resultados obtidos, na investigação, são úteis principalmente
              para o processo de conservação, restauração e catalogação das
              obras analisadas, além disso, os dados obtidos nas análises estão
              integrando um banco de dados, com as informações da matriz química
              das telas. Essas informações, irão auxiliar no futuro
              restauradores e pesquisadores como proceder no estudo das telas já
              investigados pelo laboratório móvel do IFRJ.
            </div>
          </div>
        </div>
        <div class="col-sm-4 image">
          <img
            class="lab-image d-flex justify-content-center"
            src="@/assets/laboratorio_movel/foto2.jpg"
          />
        </div>
      </div>
      <div class="row informacao align-items-center">
        <div class="col-sm-4 image">
          <img class="lab-image" src="@/assets/laboratorio_movel/foto3.jpg" />
        </div>
        <div class="col-sm-8">
          <h3 class="titulo">Como solicitar uma visita?</h3>
          <div>
            <div class="col-sm-12 text-start">
              <p>
                Podem solicitar o laboratório móvel museus e pesquisadores que
                tenham interesse em utilizar a infraestrutura e conhecimento
                técnico do grupo do laboratório móvel. Na ocasião serão
                discutidas, com o solicitante, objetivos e indicativos de
                técnicas para as análises.
              </p>

              <p>
                A instrumentação portátil do laboratório móvel pode ser vista na
                aba infraestrutura.
              </p>

              <p>
                E maiores informações podem ser feitas diretamente com
                coordenador do laboratório móvel, Renato Freitas e-mail:
                <a href="mailto:%20renato.freitas@ifrj.edu.br"
                  >renato.freitas@ifrj.edu.br</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LabMovel",
};
</script>

<style>
.informacao {
  margin-bottom: 50px;
}
.lab-image {
  width: 100%;
  object-fit: cover;
}
</style>
