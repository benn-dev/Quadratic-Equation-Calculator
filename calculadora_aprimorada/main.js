		/**Intruções de uso para o usário **/
			function dica (){
				var a = parseFloat(document.getElementById("a").value);
				var b = parseFloat(document.getElementById("b").value);
				var c = parseFloat(document.getElementById("c").value); //recebe os coeficientes passados pelo usuário
				document.write('Se um dos coeficientes for igual a zero, digite-o mesmo assim na caixa de texto.')
			}
		
		/**Formula resolutiva da equação do 2 grau **/
			// recebendo os coeficientes
			function ReceberDados(CalcularDelta, CalcularBaskhara){
			var a = parseFloat(document.getElementById("a").value);
			var b = parseFloat(document.getElementById("b").value);
			var c = parseFloat(document.getElementById("c").value); //recebe os coeficientes passados pelo usuário

			document.write('confira os coeficientes! [ A:' + a + ' ] <br>');//confirindo os coeficientes
			document.write('confira os coeficientes! [ B:' + b + ' ] <br>');//confirindo os coeficientes
			document.write('confira os coeficientes! [ C:' + c + ' ] <br>' + '<hr>');//confirindo os coeficientes
			CalcularDelta(a, b ,c); // chama a função anônima dentro da variável CalcularDelta			
			
		}
		var CalcularDelta = function(a, b ,c, RaizQdelta){
			var delta = (b**2)-4*a*c; //calcula o delta
			if(delta < 0){ // evita possíveis erros com raízes quadradas de números negativos
				document.write('O delta dessa equação é = ' + delta + '. Não possui raíz pertencente aos números reais' + '<br>' + '<hr>');
			}else if(delta == 0){
				document.write('As duas raízes possuem o mesmo valor <br>')
				var RaizQdelta = Math.ceil(delta**(1/2)); // aproxima para o valor inteiro mais próximo
				var RaizQdeltareal = delta**(1/2); 
				document.write('O delta dessa equação é = ' + delta + ' e a sua raíz (aproximada) quadrada é  = ' + RaizQdelta  + ' o valor do delta sem aproximações é:' +  RaizQdeltareal +'<br>' + '<hr>');
				CalcularBaskhara(RaizQdelta ,a , b); // realiza os parâmetros nescessário para o cálculo das raízes da equação
			}else{
				var RaizQdelta = Math.ceil(delta**(1/2)); // aproxima para o valor inteiro mais próximo
				var RaizQdeltareal = delta**(1/2); 
				document.write('O delta dessa equação é = ' + delta + ' e a sua raíz (aproximada) quadrada é  = ' + RaizQdelta  +  ' o valor do delta sem aproximações é:' +  RaizQdeltareal + '<br>' + '<hr>');
				CalcularBaskhara(RaizQdelta ,a , b); // realiza os parâmetros nescessário para o cálculo das raízes da equação
			}
		}	
		var CalcularBaskhara = function(RaizQdelta , a, b){
			var x_1 = (-b + RaizQdelta) / (2*a);	
			var x_2 = (-b - RaizQdelta) / (2*a);
			if (x_1 === x_2) {
				document.write('x1 e x2 = ' + x_1 + '<br> quer saber mais porque x1 e x2 são iguais?' + '<a href =""> clique aqui </a>')
			}else{
			document.write('A x1 = ' + x_1 + '<br>');
			document.write('A x2 = ' + x_2);
			}
		}