$(document).ready(function() {

    $('.openmodale').click(function (e) {
        e.preventDefault();
        $('#deleteModal').attr("data-id", $(this).attr('data-id'))
        $('.modale').addClass('opened');
        
    });
    $('.closemodale').click(function (e) {
        e.preventDefault();
        $('.modale').removeClass('opened');
    });

    "use strict";
    Highcharts.chart("chrt1", {
        colors: ["#f7f7f7", "#ece5e4"],
        chart: {
            type: "area",
            backgroundColor: "#3B4047",
            borderColor: "#535353",
        },
        legend: {
            enabled: false,
        },
        title: {
            style: {
                display: "none",
            },
        },
        xAxis: {
            lineColor: "#535353",
            categories: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", ],
            labels: {
                style: {
                    color: "#fff",
                },
            },
        },
        yAxis: {
            min: 0,
            labels: {
                style: {
                    color: "#fff",
                },
            },
        },
        credits: {
            enabled: false,
        },
        tooltip: {
            pointFormat: "{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}",
        },
        legend: {
            align: "right",
            verticalAlign: "top",
            itemStyle: {
                color: "#fff",
                fontSize: "13px",
                fontWeight: "300",
            },
        },
        plotOptions: {
            area: {
                categories: ["1", "2", "3", "4", "5", "6", "7"],
                marker: {
                    enabled: false,
                    symbol: "circle",
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true,
                        },
                    },
                },
            },
        },
        series: [{
            name: "Site A View",
            data: [18, 45, 35, 10, 85, 25, 90],
        }, {
            name: "Site B View",
            data: [45, 50, 25, 85, 55, 65, 70],
        }, ],
    });
    Highcharts.chart("chart2", {
        chart: {
            polar: true,
            backgroundColor: "#3B4047",
            borderColor: "#535353",
        },
        title: {
            text: null,
        },
        pane: {
            startAngle: 0,
            endAngle: 360,
        },
        xAxis: {
            lineColor: "#535353",
            tickInterval: 45,
            min: 0,
            max: 360,
            labels: {
                formatter: function() {
                    return this.value + "°";
                },
                style: {
                    color: "#fff",
                },
            },
        },
        yAxis: {
            min: 0,
            labels: {
                style: {
                    color: "#fff",
                },
            },
        },
        plotOptions: {
            series: {
                pointStart: 0,
                pointInterval: 45,
            },
            column: {
                pointPadding: 0,
                groupPadding: 0,
            },
        },
        legend: {
            align: "right",
            verticalAlign: "top",
            itemStyle: {
                color: "#ede",
                fontSize: "13px",
                fontWeight: "300",
            },
            itemHoverStyle: {
                color: "#fff",
            },
        },
        series: [{
            type: "column",
            name: "Column",
            data: [8, 7, 6, 5, 4, 3, 2, 1],
            pointPlacement: "between",
        }, {
            type: "line",
            name: "Line",
            data: [1, 2, 3, 4, 5, 6, 7, 8],
        }, {
            type: "area",
            name: "Area",
            data: [1, 8, 2, 7, 3, 6, 4, 5],
        }, ],
    });
    //===== To DO List Add Task Field =====//
    $(".to-do-tp > a").on("click", function() {
        $(this).next("div.add-tsk").slideToggle();
        return false;
    });
    //===== To Do List =====//
    $(".td-lst > li").on("click", function() {
        $(this).toggleClass("completed");
        return false;
    });
    //===== To Do List Deleted =====//
    $(".td-lst > li > a").on("click", function() {
        $(this).parent("li").slideUp();
        return false;
    });
    $(".add-tsk form > button").on("click", function() {
        var task_list = $("ul.td-lst");
        var task_item = $(".add-tsk form > input").val();
        var date = new Date();
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ];
        var current_date = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
        if(task_item !== "" && task_item !== "undefined") {
            $(task_list).prepend("<li><h5>" + task_item + '</h5> <span><i class="ion-ios-stopwatch"></i>' + current_date + '</span> <a href="#" title=""><i class="ion-android-delete"></i></a></li>');
            $(".td-lst > li").on("click", function() {
                $(this).toggleClass("active");
            });
            $(".add-tsk form > input").addClass("null");
            $(".add-tsk form > input").val("");
            $(".add-tsk form > input").focus();
            var attribute = $("ul.td-lst").children("li").eq(0).children("i");
            return false;
        }
    });
    //===== Circliful =====//
    if($.isFunction($.fn.circliful)) {
        $("#circl-prg").circliful({
            animation: 1,
            animationStep: 3,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 5,
            percent: 66,
            textSize: 35,
            foregroundColor: "#50b8aa",
            backgroundColor: "#96d5f7",
            textStyle: "font-size: 20px;",
            textColor: "#555555",
        });
    }
});