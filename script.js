const grid = document.querySelector('.grid');
const gridSizeBtn = document.querySelector('#gridSize');
const rainbowBtn = document.querySelector('#rainbow');

gridSizeBtn.addEventListener('click', function(e) {
    let dimensions = parseInt(prompt('Input the width of your grid'));
    let divDim = 800 / dimensions;
    grid.replaceChildren();

    const row = Object.assign(document.createElement('div'), {
                className: 'row',
                style: `margin: 0px; border: 0px solid black; height: ${divDim}px; width = 800px; padding: 0px; box-sizing: border-box`
            })

    const squares = Object.assign(document.createElement('div'), {
            style: `margin: 0px; border: 1px solid rgba(0, 0, 0, 0.5); width: ${divDim}px; height: ${divDim}px; padding: 0px; box-sizing: border-box`
            }) 

    const rows = [];

    for (let i = 1; i <= dimensions; i++) {
        rows.push(row.cloneNode());
    }


    for (i = 0; i < rows.length; i++) {
        grid.appendChild(rows[i]);
        for (let j = 1; j <= dimensions; j++) {
            let cell = squares.cloneNode();

            let topRow = (i === 0);
            let bottomRow = (i === dimensions - 1);
            let leftColumn = (j === 1);
            let rightColumn = (j === dimensions);

            if (topRow && leftColumn) {
                cell.style.borderTopLeftRadius = '16px';
            }
            if (topRow && rightColumn) {
                cell.style.borderTopRightRadius = '16px';
            }
            if (bottomRow && leftColumn) {
                cell.style.borderBottomLeftRadius = '16px';
            }
            if (bottomRow && rightColumn) {
                cell.style.borderBottomRightRadius = '16px'
            }
    
            rows[i].appendChild(cell);
        }
    }

    const drawFunc = function(e) {
        if (e.target !== grid && !e.target.classList.contains('row')) {
            let opacity = Number(e.target.style.opacity);
            opacity += 0.1;
            e.target.style.opacity = String(opacity);
            e.target.style.backgroundColor = bgColor;
        }
    }


    let bgColor = 'black'

    grid.addEventListener('mouseover', drawFunc)

    rainbowBtn.addEventListener('click', function(e) {
            grid.removeEventListener('mouseover', drawFunc)
            
            grid.addEventListener('mouseover', function(e) {
                if (e.target !== grid && !e.target.classList.contains('row')) {
                    let redValue = Math.floor(257 * Math.random());
                    let greenValue = Math.floor(257 * Math.random());
                    let blueValue = Math.floor(257 * Math.random());
                    e.target.style.backgroundColor = `rgba( ${redValue}, ${greenValue}, ${blueValue}, 1)`
                }
            })

        })

})






   


