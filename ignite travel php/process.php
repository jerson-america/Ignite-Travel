<?php

	$json = file_get_contents('data/GetLuxe.json');
	$data = json_decode($json, true);
	// foreach ($json as $obj) {
	//    echo $obj->property;
	// }
	foreach ($data as $field => $value) {
	    // Use $field and $value here
	    // echo "field: " . $field;

			// Get wordpress values
	    $content = $value['WordPress'];

	    // Create tiles element
	    echo "<div class='tiles'>";
	    // Create tiles bg element
	    echo "<div class='tiles-bg'>";
	    // Insert image to tiles bg
	    insertImage($content['Image']);
	    // tiles bg closing
	    echo "</div>";

	    echo "<div class='info-wrap'>";
	    // Render remaining days
	    echo "<span>" . $value['DaysLeft'] . "</span>";

	    // Create information box
	    echo "<div class='info-box'>";
	    echo "<div class='top-logo'>";
	    	insertImage($content['Logo']);
	    echo "</div>";

	    echo "<div class='text-header'>";
	    	echo "<p>" . $value['Name'] . "</p>";
	    	echo "<p>" . $value['Destination'] . "</p>";
	    echo "</div>";

	    echo "<div class='icons-wrap'>";
	    	renderIcons($content['IconsSVG']);
	    echo "</div>";

	    echo "<div class='footer-info'>";
	    	renderFooter($content['AirOnly']);
	    echo "</div>";

	    echo "<a href='" . $content['Url'] ."' target='_blank'>Get it now</a>";

	    // closing info box
	   	echo "</div>";
	   	// closing info wrap
	   	echo "</div>";
	    // tiles closing
	    echo "</div>";

	    // echo "<div class='hehe'>" . $value['WordPress']['AirOnly']['PriceValuedAt'] . "</div>";
	}

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
				echo "<div class='icon'>";
		    	echo "<img src='" . $value['Url'] . "' alt='" . $value['Alt'] . "' />";
		    	echo "<span>" . $value['Copy'] . "</span>";
				echo "</div>";
			}
		}
	}

	function renderFooter($items){
				echo "<div class='pricing'>";
					echo "<p> Valued at </p>";
					echo "<span>$ " . $items['PriceValuedAt'] . "</span>";
					echo "<span class='suffix'>pp</span>";
				echo "</div>";
				echo "<div class='pricing'>";
					echo "<p> UP TO</p>";
					echo "<span>" . $items['PriceSave'] . " %</span>";
					echo "<span class='suffix'>OFF!</span>";
				echo "</div>";
				echo "<div class='pricing'>";
					echo "<p>FROM</p>";
					echo "<span>$ " . $items['PricePayFrom'] . "</span>";
					echo "<span class='suffix'>pp</span>";
				echo "</div>";
	}
?>