const adjColor01 = '#ffffff';
const adjColor02 = '#000000';
const adjColor03 = '#8dc63f';
const adjColor04 = '#012842';
const adjColor05 = '#80b636';
const adjColor06 = '#76848e';
const adjColor07 = '#4c6676';
const adjColor08 = '#00416d';
const adjColor09 = '#dee4e8';
const adjColor10 = '#ef7104';
const adjColor11 = '#e80000';

export const ADJUNO_THEME = {
  name: 'adjuno',
  base: null,
  variables: {

    // Safari fix
    temperature: [
      adjColor03,
      adjColor03,
      adjColor03,
      adjColor03,
      adjColor03,
    ],

    solar: {
      gradientLeft: adjColor03,
      gradientRight: adjColor03,
      shadowColor: 'rgba(0, 0, 0, 0)',
      radius: ['80%', '90%'],
    },

    traffic: {
      colorBlack: '#000000',
      tooltipBg: '#ffffff',
      tooltipBorderColor: adjColor03,
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',

      lineBg: '#c0c8d1',
      lineShadowBlur: '1',
      itemColor: adjColor03,
      itemBorderColor: adjColor03,
      itemEmphasisBorderColor: adjColor03,
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
      shadowLineShadow: 'rgba(0, 0, 0, 0)',
      gradFrom: '#ebeef2',
      gradTo: '#ebeef2',
    },

    electricity: {
      tooltipBg: '#ffffff',
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '0',
      tooltipBorderColor: '#ebeef2',
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',

      axisLineColor: 'rgba(0, 0, 0, 0)',
      xAxisTextColor: '#2a2a2a',
      yAxisSplitLine: '#ebeef2',

      itemBorderColor: adjColor03,
      lineStyle: 'solid',
      lineWidth: '4',
      lineGradFrom: adjColor03,
      lineGradTo: adjColor03,
      lineShadow: 'rgba(0, 0, 0, 0)',

      areaGradFrom: 'rgba(235, 238, 242, 0.5)',
      areaGradTo: 'rgba(235, 238, 242, 0.5)',
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
    },

    bubbleMap: {
      titleColor: '#484848',
      areaColor: '#dddddd',
      areaHoverColor: '#cccccc',
      areaBorderColor: '#ebeef2',
    },

    profitBarAnimationEchart: {
      textColor: '#484848',

      firstAnimationBarColor: adjColor03,
      secondAnimationBarColor: adjColor09,

      splitLineStyleOpacity: '0.06',
      splitLineStyleWidth: '1',
      splitLineStyleColor: '#000000',

      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',
      tooltipFontSize: '16',
      tooltipBg: '#ffffff',
      tooltipBorderColor: '#c0c8d1',
      tooltipBorderWidth: '3',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
    },

    trafficBarEchart: {
      gradientFrom: adjColor08,
      gradientTo: adjColor04,
      shadow: '#ffb600',
      shadowBlur: '0',

      axisTextColor: '#b2bac2',
      axisFontSize: '12',

      tooltipBg: '#ffffff',
      tooltipBorderColor: '#c0c8d1',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',
    },

    countryOrders: {
      countryBorderColor: '#d1d6da',
      countryFillColor: adjColor09,
      countryBorderWidth: '1',
      hoveredCountryBorderColor: adjColor03,
      hoveredCountryFillColor: 'rgba(141, 198, 63, .2)',
      hoveredCountryBorderWidth: '2',

      chartAxisLineColor: 'rgba(0, 0, 0, 0)',
      chartAxisTextColor: '#b2bac2',
      chartAxisFontSize: '16',
      chartGradientTo: adjColor05,
      chartGradientFrom: adjColor03,
      chartAxisSplitLine: '#ebeef2',
      chartShadowLineColor: '#2f296b',

      chartLineBottomShadowColor: '#eceff4',

      chartInnerLineColor: '#eceff4',
    },

    echarts: {
      bg: '#ffffff',
      textColor: '#484848',
      axisLineColor: '#bbbbbb',
      splitLineColor: '#ebeef2',
      itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      tooltipBackgroundColor: '#6a7985',
      areaOpacity: '0.7',
    },

    chartjs: {
      axisLineColor: '#cccccc',
      textColor: '#484848',
    },

    orders: {
      tooltipBg: '#ffffff',
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '0',
      tooltipBorderColor: adjColor03,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',
      tooltipFontSize: '20',

      axisLineColor: 'rgba(161, 161 ,229, 0.3)',
      axisFontSize: '16',
      axisTextColor: '#b2bac2',
      yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',

      itemBorderColor: adjColor03,
      lineStyle: 'solid',
      lineWidth: '4',

      // first line
      firstAreaGradFrom: 'rgba(236, 242, 245, 0.8)',
      firstAreaGradTo: 'rgba(236, 242, 245, 0.8)',
      firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',

      // second line
      secondLineGradFrom: adjColor03,
      secondLineGradTo: adjColor03,

      secondAreaGradFrom: 'rgba(188, 92, 255, 0.2)',
      secondAreaGradTo: 'rgba(188, 92, 255, 0)',
      secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',

      // third line
      thirdLineGradFrom: adjColor04,
      thirdLineGradTo: adjColor04,

      thirdAreaGradFrom: 'rgba(31 ,106, 124, 0.2)',
      thirdAreaGradTo: 'rgba(4, 126, 230, 0)',
      thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
    },

    // TODO: need design for default theme
    profit: {
      bg: '#ffffff',
      textColor: '#ffffff',
      axisLineColor: 'rgba(161, 161 ,229, 0.3)',
      splitLineColor: 'rgba(161, 161 ,229, 0.2)',
      areaOpacity: '1',

      axisFontSize: '16',
      axisTextColor: '#b2bac2',

      // first bar
      firstLineGradFrom: adjColor03,
      firstLineGradTo: adjColor05,
      firstLineShadow: 'rgba(14, 16, 48, 0.4)',

      // second bar
      secondLineGradFrom: adjColor04,
      secondLineGradTo: '#041f31',
      secondLineShadow: 'rgba(14, 16, 48, 0.4)',

      // third bar
      thirdLineGradFrom: adjColor10,
      thirdLineGradTo: adjColor10,
      thirdLineShadow: 'rgba(14, 16, 48, 0.4)',
    },

    orderProfitLegend: {
      firstItem: adjColor03,
      secondItem: adjColor04,
      thirdItem: adjColor10,
    },

    visitors: {
      tooltipBg: '#ffffff',
      tooltipLineColor: 'rgba(0, 0, 0, 0)',
      tooltipLineWidth: '0',
      tooltipBorderColor: adjColor03,
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',
      tooltipFontSize: '20',

      axisLineColor: 'rgba(161, 161 ,229, 0.3)',
      axisFontSize: '16',
      axisTextColor: '#b2bac2',
      yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',

      itemBorderColor: adjColor03,
      lineStyle: 'dotted',
      lineWidth: '6',
      lineGradFrom: '#ffffff',
      lineGradTo: '#ffffff',
      lineShadow: 'rgba(14, 16, 48, 0)',

      areaGradFrom: adjColor04,
      areaGradTo: adjColor04,
      shadowLineDarkBg: '#a695ff',

      innerLineStyle: 'solid',
      innerLineWidth: '1',

      innerAreaGradFrom: adjColor03,
      innerAreaGradTo: adjColor05,
    },

    visitorsLegend: {
      firstIcon: `linear-gradient(90deg, ${adjColor03} 0%, ${adjColor05} 100%)`,
      secondIcon: `linear-gradient(90deg, ${adjColor04} 0%, ${adjColor04} 100%)`,
    },

    visitorsPie: {
      firstPieGradientLeft: adjColor03,
      firstPieGradientRight: adjColor05,
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',
      firstPieRadius: ['70%', '90%'],

      secondPieGradientLeft: adjColor04,
      secondPieGradientRight: adjColor08,
      secondPieShadowColor: adjColor08,
      secondPieRadius: ['60%', '97%'],
      shadowOffsetX: '0',
      shadowOffsetY: '0',
    },

    visitorsPieLegend: {
      firstSection: `linear-gradient(90deg, ${adjColor03} 0%, ${adjColor05} 100%)`,
      secondSection: `linear-gradient(90deg, ${adjColor04} 0%, ${adjColor08} 100%)`,
    },

    earningPie: {
      radius: ['65%', '100%'],
      center: ['50%', '50%'],

      fontSize: '22',

      firstPieGradientLeft: adjColor03,
      firstPieGradientRight: adjColor05,
      firstPieShadowColor: 'rgba(0, 0, 0, 0)',

      secondPieGradientLeft: adjColor08,
      secondPieGradientRight: adjColor04,
      secondPieShadowColor: 'rgba(0, 0, 0, 0)',

      thirdPieGradientLeft: adjColor10,
      thirdPieGradientRight: '#da6704',
      thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
    },

    earningLine: {
      gradFrom: adjColor03,
      gradTo: adjColor05,

      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',
      tooltipFontSize: '16',
      tooltipBg: '#ffffff',
      tooltipBorderColor: '#c0c8d1',
      tooltipBorderWidth: '3',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
    },
  },
};
