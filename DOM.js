
var TestBlock = {
	
	title : function(){
		  var element = document.createElement('div');
		  element.classList.add('wrapper');
		  element.innerHTML = '<h1>тест по программированию</h1>';
		  document.body.appendChild(element);
		},
		
	setForm : function(){
		var forma = document.createElement('form');
		var wrapper = document.querySelector('.wrapper');
		wrapper.appendChild(forma);
		},
	
	setField : function( legend ){
		var field = document.createElement('fieldset');
		field.innerHTML = '<legend>' + legend + '</legend>';
		var form = document.querySelector('form');
		form.appendChild(field);
		},
		
	setAnswerForFieldset : function( variant, question ){
		var label = document.createElement('label');
		label.innerHTML = '<input type="checkbox">' + variant + '';
		var pos = document.querySelectorAll('fieldset');
		pos[question - 1].appendChild(label);
		},
	setInp : function(){
		var input = document.createElement('div');
		input.classList.add('submit');
		input.innerHTML = '<input type="submit" value="CHECK">';
		var form = document.querySelector('form');
		form.appendChild(input);
		}		
	}



var questNumber = prompt('Введите общее число вопросов');
var variantNumber = prompt('Введите общее число вариантов');


TestBlock.title();
TestBlock.setForm();
/*TestBlock.setField('Вопрос 1');
TestBlock.setAnswerForFieldset('Variant 1', 1);
TestBlock.setAnswerForFieldset('Variant 2', 1);
TestBlock.setAnswerForFieldset('Variant 3', 1);
TestBlock.setField('Вопрос 2');
TestBlock.setAnswerForFieldset('Variant 1', 2);
TestBlock.setAnswerForFieldset('Variant 2', 2);
TestBlock.setAnswerForFieldset('Variant 3', 2);
TestBlock.setField('Вопрос 3');
TestBlock.setAnswerForFieldset('Variant 1', 3);
TestBlock.setAnswerForFieldset('Variant 2', 3);
TestBlock.setAnswerForFieldset('Variant 3', 3);*/


for ( var i = 1; i <= questNumber; i++){
	TestBlock.setField('Вопрос ' + i);
		for ( var k = 1; k <= variantNumber; k++){
			TestBlock.setAnswerForFieldset('Variant ' + k, i);
			}
	}



TestBlock.setInp();


