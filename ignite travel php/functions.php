<?php
	function insertImage($image){
		if($image && is_array($image)){
			foreach ($image as $value) {
		    echo "<img src='" . $value['Url'] . "' alt='" . $value['Alt'] . "' title='" . $value['Title'] . "' />";
			}
		}
	}

	function renderIcons($icons){
		
		if($icons && is_array($icons)){
			foreach ($icons as $value) {
				$output = "";
				$output .= "<div class='icon'>";
		    	$output .= "<img src='" . $value['Url'] . "' alt='" . $value['Alt'] . "' />";
		    	$output .= "<span>" . $value['Copy'] . "</span>";
				$output .= "</div>";
				echo $output;
			}
		}
	}
?>