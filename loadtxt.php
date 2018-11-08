<?php
  $file = "testDateDoc.txt";
  $f = fopen($file, "r");
  while ( $line = fgets($f, 1000) ) {
      print $line;
  }
?>