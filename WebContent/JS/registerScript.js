

$('select[data-security-question]').on('change',function(){ 
	var $question = $(this),
			$answer = $('#'+$question.data('security-answer-id')),
			questionText = $question.find('option:selected').text();
	if ($question.val() != "") {
		$answer.attr('aria-label',$answer.data('label-prefix') +" "+ questionText);
	} else {
		$answer.attr('aria-label',$answer.data('default-label'));
	}
})


$(function() {
	   $(':checkbox').on( 'change', function() {
	      if( $(':checkbox:checked').length == 5 ) {
	         $('input.continue_button').prop( 'disabled', false );
	      } else {
	         $('input.continue_button').prop( 'disabled', true );
	      }
	   });
	});