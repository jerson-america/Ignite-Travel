<!DOCTYPE html>
<html>
<head>
	<title>Ignite Travel</title>
	<link rel="stylesheet" type="text/css" href="css/reset.css">
	<link rel="stylesheet" type="text/css" href="scss/style.css">
</head>

<body>

<?php include('functions.php') ?>
 	<div id="wrapper">
		<?php 
		$json = file_get_contents('data/GetLuxe.json');
		$data = json_decode($json, true);
			foreach ($data as $field => $value) {
			$content = $value['WordPress']; 		
		?>
			<div class="tiles">
				<div class="tiles-bg">
					<?php insertImage($content['Image']) ?>
				</div>
				<div class="info-wrap">
					<span><?php echo $value['DaysLeft'] ?></span>
					<div class="info-box">
						<div class="top-logo">
							<?php insertImage($content['Logo']) ?>		
						</div>
						<div class="text-header">
							<p><?php echo $value['Name'] ?></p>
							<p><?php echo $value['Destination'] ?></p>
						</div>
						<div class="icons-wrap">
							<?php renderIcons($content['IconsSVG']); ?>
						</div>
						<?php $item = $content['AirOnly'];?>
						<div class="footer-info clearfix">
							<div class="pricing">
								<p> Valued at </p>
								<span><?php echo "$ " .  $item['PriceValuedAt'] ?></span>
								<span class="suffix">pp</span>
							</div>
							<div class="pricing">
								<p> UP TO</p>
								<span><?php echo $item['PriceSave'] . "%" ?></span>
								<span class="suffix">OFF!</span>
							</div>
							<div class="pricing">
								<p>FROM</p>
								<span><?php echo "$ " . $item['PricePayFrom'] ?></span>
								<span class="suffix">pp</span>
							</div>
						</div>
						<a href=<?php echo $content['Url'] ?> target="_blank">Get it now</a>
					</div>
				</div>
			</div>
		<?php } ?>
	</div>
</body>
</html>