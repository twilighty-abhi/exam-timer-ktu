function countdown(cdate, dest) {
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = cdate - now;
        if (distance < 0) {
            clearInterval(x);
            dest.innerHTML = "EXAM OVER";
            return;
        }
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        dest.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }, 1000);
}

var exams = [
    { date: "May 23, 2024 9:30:00", dest: '.ex1' },
    { date: "May 28, 2024 9:30:00", dest: '.ex2' },
    { date: "June 1, 2024 9:30:00", dest: '.ex3' },
    { date: "June 6, 2024 9:30:00", dest: '.ex4' },
    { date: "June 11, 2024 9:30:00", dest: '.ex5' },
    { date: "June 14, 2024 9:30:00", dest: '.ex6' }
];

exams.forEach(function(exam) {
    var cdex = new Date(exam.date).getTime();
    var dest = document.querySelector(exam.dest);
    countdown(cdex, dest);
});
