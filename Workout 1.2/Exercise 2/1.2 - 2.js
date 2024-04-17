Read a
Read b
Write r

if (b!=0) {
    while (b > 1) {
        r = a/b
        a = b
        b = r
    }
} else {
    a = b
}

