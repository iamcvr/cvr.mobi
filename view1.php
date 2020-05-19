<!DOCTYPE html>
<html lang="en" >
   <head>
      <meta charset="UTF-8">
<link rel="stylesheet" href="../css/custom.css">
      <title><?php echo htmlentities($_GET['page']); ?></title>
   </head>
   <body>
<div class="full-centered">
      <?php if (! isset($_GET["page"])) { header("Location: k.html"); exit(0); } ?>
      <video src="works/<?php echo htmlentities($_GET['page']); ?>.webm" class="original" controls/></div>

</div>

   </body>
</html>
