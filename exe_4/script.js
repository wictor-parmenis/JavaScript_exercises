// Calculando a média escolar por uma array.

const points = [100, 100, 100];

function average(points){
    average = (points[0] + points[1] + points[2]) / 3

    if (average >= 0 & average <= 59){
        return window.console.log('F')
    }else{
        if (average >= 60 & average <= 69)
            return window.console.log('D')
        if (average >= 70 & average <= 79)
            return window.console.log('C')
        if (average >= 80 & average <= 89)
            return window.console.log('B')
        if (average >= 90 & average <= 100)
            return window.console.log('A')   
    }
}

average(points)
