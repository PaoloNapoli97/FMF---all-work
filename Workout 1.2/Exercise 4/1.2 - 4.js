Read n 
initialize r
initialize reverse 

while (n != 0) {
    r = n%10
    reverse = reverse*10 + r 
    n = n/10
}
