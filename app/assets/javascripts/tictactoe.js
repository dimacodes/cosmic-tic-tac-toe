$(function() {

  var player = 1;
  var table = $('table');
  var messages = $('.messages');
  var turn = $('.turn');
  displayPlayerTurn(turn, player);

  $('td').click(function() {
    td = $(this);
    var state = getState(td);
    if(!state) {
      var mark = currentPlayer(player);
      changeState(td, mark);
      if(checkWinner(table, mark)) {
        messages.html('Player '+player+' has won.');
        turn.html('');
      } else {
        player = nextPlayer(player);
        displayPlayerTurn(turn, player);
      }
    } else {
      messages.html('Please try again.');
    }
  });

  $('.reset').click(function() {
    player = 1;
    messages.html('');
    reset(table);
    displayPlayerTurn(turn, player);
  });
});

function getState(td) {
  if(td.hasClass('x') || td.hasClass('o')) {
    return 1;
  } else {
    return 0;
  }
}

function changeState(td, mark) {
  return td.addClass(mark);
}

function currentPlayer(player) {
  if(player == 1) {
    return 'x';
  } else {
    return 'o';
  }
}

function nextPlayer(player) {
  if(player == 1) {
    return player = 2;
  } else {
    return player = 1;
  }
}

function displayPlayerTurn(turn, player) {
  turn.html('Player turn : '+player);
}

function checkWinner(table, mark) {
  var won = 0;
  if(table.find('.cell1').hasClass(mark) && table.find('.cell2').hasClass(mark) && table.find('.cell3').hasClass(mark)) {
    won = 1;
	}	else if (table.find('.cell4').hasClass(mark) && table.find('.cell5').hasClass(mark) && table.find('.cell6').hasClass(mark)) {
	  won = 1;
  } else if (table.find('.cell7').hasClass(mark) && table.find('.cell8').hasClass(mark) && table.find('.cell9').hasClass(mark)) {
    won = 1;
  } else if (table.find('.cell1').hasClass(mark) && table.find('.cell4').hasClass(mark) && table.find('.cell7').hasClass(mark)) {
    won = 1;
  } else if (table.find('.cell2').hasClass(mark) && table.find('.cell5').hasClass(mark) && table.find('.cell8').hasClass(mark)) {
    won = 1;
  }	else if (table.find('.cell3').hasClass(mark) && table.find('.cell6').hasClass(mark) && table.find('.cell9').hasClass(mark)) {
    won = 1;
  } else if (table.find('.cell1').hasClass(mark) && table.find('.cell5').hasClass(mark) && table.find('.cell9').hasClass(mark)) {
    won = 1;
  } else if (table.find('.cell3').hasClass(mark) && table.find('.cell5').hasClass(mark) && table.find('.cell7').hasClass(mark)) {
    won = 1;
  }
  return won;
}

function reset(table) {
  table.find('td').each(function() {
    $(this).removeClass('o').removeClass('x');
  });
}
