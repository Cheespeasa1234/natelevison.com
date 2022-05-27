# Read the user input   
echo "Enter the new version: "  
read version
echo "The new version is $version"  
echo "======="
echo "Enter the version description:"
read desc
echo "Version $version is: $desc"
echo "======="
echo "Saving to file: version.txt"
echo "$version $desc" > version.txt
echo "Saved."
echo "======="