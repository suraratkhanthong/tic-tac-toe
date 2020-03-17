import React,{Component} from 'react';

import './Test.css';


class Test extends React.Component{
    constructor(){
        super()
        this.alertWin1 = ""; this.alertWin2= "";this.alertWin3= "";this.alertWin4= "";this.alertWin5= "";this.alertWin6= "";this.alertWin7= "";this.alertWin8 = "";this.alertWin9 = "";
        this.txt = [];
        this.resultWin = 1;
        this.txtWinner = "";
        this.num = 1;
        this.click = 1;
        this.color_X = "thistle";
        this.color_O = "unset";
        this.state ={
            hideEle: false
        };
        this.TurnCss = "none";
        this.hideWinnerCss = "none";
        this.TxtTurn = "X";
        this.cssTurn = "tomato";
    }
    select(x){
        if(x === "X"){this.num = 1; this.color_O = "unset"; this.color_X = "thistle"; this.TxtTurn = "X";}
        if(x === "O"){this.num = 0; this.color_O = "thistle"; this.color_X = "unset"; this.TxtTurn = "O";}
        //alert(x)
        this.forceUpdate()
    }
    add(val){ 
        if(this.resultWin != 0){
        var x = val;
        var y = val;
        var z = val;
        if(this.num == 1){
            this.txt[x] = "<span class='style-x'>X</span>";
            this.num = 0;
            this.TxtTurn = "O";
            this.cssTurn = "rgb(3, 110, 211)";
        }else{
            this.txt[x] = "<span class='style-o'>O</span>";
            this.num = 1;
            this.TxtTurn = "X";
            this.cssTurn = "tomato";
        }   
        //แนวนอน
        if(x >= 0 && x <= 2){x = 0;}
        if(x >= 3 && x <= 5){x = 3;}
        if(x >= 6 && x <= 8){x = 6;}
        if(this.txt[0+x] === this.txt[1+x] && this.txt[1+x] === this.txt[2+x]){
            if(x == 0){this.alertWin1 = "#fbcad8";this.alertWin2 = "#fbcad8";this.alertWin3 = "#fbcad8";}
            if(x == 3){this.alertWin4 = "#fbcad8";this.alertWin5 = "#fbcad8";this.alertWin6 = "#fbcad8";}
            if(x == 6){this.alertWin7 = "#fbcad8";this.alertWin8 = "#fbcad8";this.alertWin9 = "#fbcad8";}
            this.resultWin = 0;
            this.winner(this.txt[val]);
        }
        //แนวตั้ง
        if(y == 0 || y == 3 || y == 6){y = 0;}
        if(y == 1 || y == 4 || y == 7){y = 1;}
        if(y == 2 || y == 5 || y == 8){y = 2;}
        if(this.txt[0+y] === this.txt[3+y] && this.txt[3+y] === this.txt[6+y] && this.click >= 5){
            if(y == 0){this.alertWin1 = "#fbcad8";this.alertWin4 = "#fbcad8";this.alertWin7 = "#fbcad8";}
            if(y == 1){this.alertWin2 = "#fbcad8";this.alertWin5 = "#fbcad8";this.alertWin8 = "#fbcad8";}
            if(y == 2){this.alertWin3 = "#fbcad8";this.alertWin6 = "#fbcad8";this.alertWin9 = "#fbcad8";}
            this.resultWin = 0; this.winner(this.txt[val]);
        }

        //แนวเฉียง
        if(z == 8 ){z = 0;}
        var i = z;
        if(z == 2 || z == 6){i = -2;}
        if(z != 4){
            if(this.txt[z] === this.txt[4] && this.txt[4] === this.txt[i+8] && this.click >= 5){
                if(z == 0){this.alertWin1 = "#fbcad8";this.alertWin5 = "#fbcad8";this.alertWin9 = "#fbcad8";}
                if(i == -2){this.alertWin3 = "#fbcad8";this.alertWin5 = "#fbcad8";this.alertWin7 = "#fbcad8";}
                this.resultWin = 0;this.winner(this.txt[val]);
            }
        }else{
            if(this.txt[0] != "" && this.txt[8] != "" && this.txt[0] === this.txt[4] && this.txt[4] === this.txt[8])
            {
                this.alertWin1 = "#fbcad8";this.alertWin5 = "#fbcad8";this.alertWin9 = "#fbcad8";
                this.resultWin = 0;this.winner(this.txt[val]);
            }
            if(this.txt[2] != "" && this.txt[6] != "" && this.txt[2] === this.txt[4] && this.txt[4] === this.txt[6]){
                this.alertWin3 = "#fbcad8";this.alertWin5 = "#fbcad8";this.alertWin7 = "#fbcad8";
                this.resultWin = 0; this.winner(this.txt[val]);
            }
        }

        this.click++;
        this.forceUpdate()
        }else{
            window.location.reload(false);
        }
    }
    start(){
        this.setState({hideEle: true})
        if(this.resultWin != 0){this.TurnCss = "block";}
        
    }
    winner(x){
        this.TurnCss = "none";
        this.txtWinner = x;
        this.hideWinnerCss = "block";
    }
    render(){
        const bgColorX = {
            backgroundColor: this.color_X
        }
        const bgColorO = {
            backgroundColor: this.color_O
        }
        const hideEle = this.state.hideEle ? {display: 'none'}:{};
        const hideTurn = {
            display: this.TurnCss
        }
        const hideWinner = {
            display: this.hideWinnerCss
        }
        const addCssTurn = {
            color: this.cssTurn
        }
        const alertWin1 = {backgroundColor: this.alertWin1}
        const alertWin2 = {backgroundColor: this.alertWin2}
        const alertWin3 = {backgroundColor: this.alertWin3}
        const alertWin4 = {backgroundColor: this.alertWin4}
        const alertWin5 = {backgroundColor: this.alertWin5}
        const alertWin6 = {backgroundColor: this.alertWin6}
        const alertWin7 = {backgroundColor: this.alertWin7}
        const alertWin8 = {backgroundColor: this.alertWin8}
        const alertWin9 = {backgroundColor: this.alertWin9}
       return (
            <div className="container">
                <div class="row">
                <div class="col-sm-3">
                   
                <div class="col-sm-12 block-select text-center">
                    <div class="Ele-select" style={hideEle} >
                        <div class="txt-select">Select Player</div>
                        <span style={bgColorX} class='value style-x btn-select' onClick={ () => this.select("X") }>X</span>
                        <span style={bgColorO} class='value style-o btn-select' onClick={ () => this.select("O") }>O</span>
                    </div> 
                    <div class="Ele-show" style={hideTurn} >
                        <div class="txt-select">Turn</div>
                        <span style={addCssTurn} class='value txt-turn'>{this.TxtTurn}</span>
                        <br />
                        <div class="txt-new" onClick={() => window.location.reload(false) } >New !</div>
                    </div>
                    <div class="Ele-show" style={hideWinner} >
                        <span class="value" dangerouslySetInnerHTML={{__html: this.txtWinner}}></span>
                        <div class="txt-select">Winner !</div>
                    </div>
                </div>
                </div>
                <div class="col-sm-6">
                <div class="jumbotron  text-center"  ><h1 class="">Tic-Tac-Toe</h1></div>
                <table class="table table-bordered block" onClick={ () => this.start() }>
                <tr>
                    <td style={alertWin1} onClick={ () => this.add(0) }><span class="value" dangerouslySetInnerHTML={{__html: this.txt[0]}}></span></td>
                    <td style={alertWin2} onClick={ () => this.add(1) }><span class="value " dangerouslySetInnerHTML={{__html: this.txt[1]}}></span></td>
                    <td style={alertWin3} onClick={ () => this.add(2) }><span class="value" dangerouslySetInnerHTML={{__html: this.txt[2]}}></span></td>
                </tr>
                <tr>
                    <td style={alertWin4} onClick={ () => this.add(3) }><span class="value" dangerouslySetInnerHTML={{__html: this.txt[3]}}></span></td>
                    <td style={alertWin5} onClick={ () => this.add(4) }><span class="value" dangerouslySetInnerHTML={{__html: this.txt[4]}}></span></td>
                    <td style={alertWin6} onClick={ () => this.add(5) }><span class="value" dangerouslySetInnerHTML={{__html: this.txt[5]}}></span></td>
                </tr>
                <tr>
                    <td style={alertWin7} onClick={ () => this.add(6) }><span class="value" dangerouslySetInnerHTML={{__html: this.txt[6]}}></span></td>
                    <td style={alertWin8} onClick={ () => this.add(7) }><span class="value" dangerouslySetInnerHTML={{__html: this.txt[7]}}></span></td>
                    <td style={alertWin9} onClick={ () => this.add(8) }><span class="value" dangerouslySetInnerHTML={{__html: this.txt[8]}}></span></td>
                </tr>
                </table>
                </div>
                <div class="col-sm-3">
                
                </div>
                </div>
            </div>
            );
    }
}

export default Test;