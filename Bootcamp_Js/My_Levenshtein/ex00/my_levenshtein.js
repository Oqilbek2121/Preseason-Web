function my_levenshtein(gilam_1, gilam_2) {
	if (gilam_1.length == 0 || gilam_2.length == 0) {
        return 0;
    }
    else if (gilam_1.length != gilam_2.length) {
        return -1;
    }
    else {
        value = 0;
        for (i = 0; i < gilam_1.length; i++) {
            if (gilam_1[i]!=gilam_2[i]) {
                value++;
            }
        }
        return value;
    }
}