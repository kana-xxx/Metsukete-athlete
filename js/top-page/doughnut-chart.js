


// 1つ目の円グラフ
const centerTextPluginAna1 = {
    id: 'center-text-plugin-1',
    beforeDraw: function (chart, args, options) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.fillStyle = 'white';
        ctx.fillRect(left, top, width, height);
    
        // データセットから値を取得
        const dataset = chart.config.data.datasets[0];
        const dataValue = dataset.data[0]; // ここでは最初のデータを使用
    
        ctx.textAlign = 'center';
    
        // テキストスタイルを設定
        const labelText = 'あなたの入力率';
        const dataText = dataValue;
        const percentText = '%';
    
        // "あなたの入力率" のテキストスタイル
        ctx.font = '500 20px "Noto sans JP"'; // フォントの太さとファミリを設定
    
        // テキストを中央に描画
        ctx.fillStyle = 'black'; // テキスト色を設定
        ctx.fillText(labelText, width / 2, height / 2 - 28); // テキストを上に配置
    
        // 'データ' のテキストスタイル
        ctx.font = '100 65px "Open Sans"'; // データのフォントの太さとファミリを設定
            // データのテキストを中央に描画
            ctx.fillStyle = 'black'; // テキスト色を設定
            ctx.fillText(dataText, width / 2, height / 2 + 42); // データのテキストを下に配置
        // '%' のテキストスタイル
        ctx.font = '300 25px "Open Sans"'; // データのフォントの太さとファミリを設定
            // '%' のテキストを描画
        ctx.fillStyle = 'black'; // テキスト色を設定
        ctx.fillText(percentText, width / 2 + 50, height / 2 + 42); // '%' テキストをデータの右に配置
    
        ctx.restore();
    }
  };
  
  const DoughnutChartAnalysis1 = new Chart(document.getElementById('myChart1'), {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [75, 25],
          backgroundColor: [
            '#005792',
            '#E5E5E5',
          ],
          borderColor: 'rgba(0, 0, 0, 0)',
          cutout: '65%',
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: 'left',
        },
      },
    },
    plugins: [centerTextPluginAna1],
  });
  

  const dataLabelPlugin = {
    afterDatasetsDraw: function (chart, easing) {
        var ctx = chart.ctx;
        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    ctx.fillStyle = 'rgb(255, 255, 255)';

                    var fontSize = 14;
                    var fontStyle =  ctx.font = '100 14px "Open Sans"';
                    var fontFamily = 'Helvetica Neue';
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                    var dataString = dataset.data[index].toString() + '%';

                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    var padding = 5;
                    var position = element.tooltipPosition();
                    ctx.fillText(dataString, position.x, position.y - (fontSize / 20) - padding);
                })
            }
        })
    }
}



  // 2つ目の円グラフ
  const centerTextPluginAna2 = {
    id: 'center-text-plugin-2',
    beforeDraw: function (chart, args, options) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.fillStyle = 'white';
        ctx.fillRect(left, top, width, height);
    
        ctx.textAlign = 'center';
    
        // テキストスタイルを設定
        const labelText = '周りから見た';
        const labelText2 = 'あなたのタイプ';

        // "周りから見た" のテキストスタイル
        ctx.font = '500 20px "Noto sans JP"'; // フォントの太さとファミリを設定
    
        // テキストを中央に描画
        ctx.fillStyle = 'black'; // テキスト色を設定
        ctx.fillText(labelText, width / 2, height / 2 - 15); // テキストを上に配置
    
      
        // "あなたのタイプ" のテキストスタイル
        ctx.font = '500 20px "Noto sans JP"'; // フォントの太さとファミリを設定
    
        // テキストを中央に描画
        ctx.fillStyle = 'black'; // テキスト色を設定
        ctx.fillText(labelText2, width / 2, height / 2 - -15); // テキストを上に配置
    
        ctx.restore();
    }
  };
  
  const DoughnutChartAnalysis2 = new Chart(document.getElementById('myChart2'), {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [12, 25, 20, 16, 16],
          backgroundColor: [
            '#BEBEBE',
            '#37AAD6',
            '#8ED0EA',
            '#C7E007',
            '#575757',
          ],
          borderColor: 'rgba(0, 0, 0, 0)',
          cutout: '53%',
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: 'left',
        },
      },
    },
    plugins: [dataLabelPlugin , centerTextPluginAna2],

  });
  
