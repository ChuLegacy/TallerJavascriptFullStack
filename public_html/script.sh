for i in `seq 1 108`;
do
	rm "Punto$i/index.html"
	echo "<!DOCTYPE html>
<html lang=\"en\">
<head>
	<meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">
	<meta charset=\"UTF-8\">
	<title>Document</title>
	<link rel=\"stylesheet\" href=\"css/style.css\">
</head>
<body>

<script src=\"./js/app.js\"></script>
</body>
</html>" >> "./Punto$i/index.html"
done