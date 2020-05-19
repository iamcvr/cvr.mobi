<!DOCTYPE html>
<html lang="en" >
   <head>
      <meta charset="UTF-8">
<link rel="stylesheet" href="/style.css">
      <title><?php echo htmlentities($_GET['page']); ?></title>
   </head>
   <body>  
<div class="full-centered">    
      <?php if (! isset($_GET["page"])) { header("Location: index.html"); exit(0); } ?>
      <img src="<?php echo htmlentities($_GET['page']); ?>.gif" class="original"/></div>

</div>
      <audio autoplay ="autoplay" loop="loop" src="<?php echo htmlentities($_GET['page']); ?>.mp3"></audio>
   </body>
</html>