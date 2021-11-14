let number=prompt('Please enter number from 0 to 59');

if (0<=number>=14) {
    alert( "Перша чверть" );
} else if (15<=number>=29) {
    alert( "Друга чверть" );
} else if (30<=number>=44) {
    alert( "Третя чверть" );
} else if (45<=number>=60) {
    alert( "Четверта чверть" );
} else {
    alert('Please enter correct number')
}