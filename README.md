# curso-angular-typescript

## Angular:
    > É um framework para construir aplicações web
    baseadas em HTML5, CSS, JS;

    > Permite organizar essas tecnologias e entregar uma aplicação que executa no browser capaz de consumir um
    ou vários serviços disponibilizados pelo servidor

    > Construir uma aplicação chamada de client-side

----------------------------------------------------------------------

## TypeScript:
    > É uma extensão do JavaScript que adiciona tipos como: number e boolean e também oferece suporte a classes e interfaces.

    > TypeScript pode ajudar a detectar erros em tempo de desenvolvimento por causa da tipagem.

    > Organização do código porque ele oferece módulos que são unidades independentes.

    > Super conjunto do JS. Extende as especificações do ECMA2015.

    Como funciona:
        > O navegador não entende TS, para que o seu código seja executado é preciso transformar o que foi escrito em JS. Esse processo é chamado de 'transpile'. É similar a compilação, mas ele traduz entre códigos fontes de linguagens similar. O navegador importa o JS resultado dessa tradução.


    > Quando se inicia um projeto TS do zero é importante ter o arquivo 'tsconfig.json'. Esse arquivo vai conter as opções do compilador.

    Funções:
        > TS imcrementa as funções introduzindo a possibilidade de ter parâmetros e retornos tipados.

        Sintaxe:
            function useTheForce(name: string): void {
                console.log('Use the force,' name)
            }

    Classes e interfaces

        O que é uma Classe ?
            > São representações de um objeto do mundo real que pode ter caracteristicas ou atributos, e realizar ações que chamamos de métodos.

            > Servem de modelos ou moldes para criação de um objeto.

            > Uma classe é a definição de um objeto. Ela diz o que um objeto vai ter e como ele vai se comportar. 


    Módulo 

        O que é um módulo ?
            > Uma unidade que contém classes, interfaces, funções e variáveis com o objetivo de deixar o conteúdo de um arquivo isolado do restante da aplicação.

        O que é namespace ? 
            > Maneira de organizar o código para evitar colisão de nomes.


    Definição de tipos

        > O Typescript define um padrão onde é possível mapear uma biblioteca qualquer em JS, para ser usada pelos scripts em TS.

        > Esses arquivos possuem a extençao '*.d.ts'