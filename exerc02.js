function buscar() {
    var user = document.querySelector('input[name=user]');
    var div = document.querySelector('.repos');
    var tabela = document.createElement('table');
    
    tabela.setAttribute('class', user.value + ' table table-hover table-stripped table-dark');

    var divImg = document.querySelector('.img');
    var img = document.createElement('img');
    img.setAttribute('src', 'loading.gif');
    divImg.appendChild(img);

    axios.get('https://api.github.com/users/'+ user.value +'/repos')
        .then(function(response) {
            divImg.removeChild(img);
            var cabecalho = document.createElement('thead');
            var linhaCab = document.createElement('tr');
            var colCab1 = document.createElement('td');
            var colCab2 = document.createElement('td');

            var num = document.createTextNode('#');
            var text = document.createTextNode('REPOSITÓRIOS');
            
            linhaCab.style.fontSize = '20px';

            colCab1.appendChild(num);
            colCab2.appendChild(text);   
            linhaCab.appendChild(colCab1);
            linhaCab.appendChild(colCab2);
            cabecalho.appendChild(linhaCab);
            tabela.appendChild(cabecalho);
            div.appendChild(tabela);

            var corpo = document.createElement('tbody');
            tabela.appendChild(corpo);

            for (var i = 0; i < response.data.length; i++) {
                var linha = document.createElement('tr');
                var coluna1 = document.createElement('td');
                var coluna2 = document.createElement('td');

                var repos = document.createTextNode(response.data[i].name);
                var number = document.createTextNode(i + 1);

                coluna1.appendChild(number);
                coluna2.appendChild(repos);                
                linha.appendChild(coluna1);
                linha.appendChild(coluna2);
                corpo.appendChild(linha);
            }

        })
        .catch(function(error) {

            var texto = document.createTextNode('Usuário não encontrado...');
            
            linhaO.style.textAlign = 'center';


            div.appendChild(texto);

            
        });
    
    user.value = '';

}