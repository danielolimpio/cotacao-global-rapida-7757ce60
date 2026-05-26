import { useEffect, useRef } from 'react';

interface TradingViewWidgetProps {
  symbol: string;
  width?: string;
  height?: string;
  autosize?: boolean;
  theme?: 'light' | 'dark';
  style?: 'basic' | 'advanced';
  locale?: string;
}

const TradingViewWidget = ({
  symbol,
  width = "100%",
  height = "400",
  autosize = false,
  theme = "light",
  style = "basic",
  locale = "br"
}: TradingViewWidgetProps) => {
  const container = useRef<HTMLDivElement>(null);
  const creditHeight = 24;
  const numericHeight = Number.parseInt(height, 10);
  const totalHeight = Number.isFinite(numericHeight) ? numericHeight : 400;
  const chartPixelHeight = Math.max(totalHeight - creditHeight, 280);
  const chartHeight = autosize ? `calc(100% - ${creditHeight}px)` : `${chartPixelHeight}px`;

  useEffect(() => {
    if (!container.current) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        [symbol]
      ],
      chartOnly: false,
      width: autosize ? "100%" : width,
      height: autosize ? "100%" : chartPixelHeight.toString(),
      locale: locale,
      colorTheme: theme,
      autosize: autosize,
      showVolume: false,
      showMA: false,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false,
      scalePosition: "right",
      scaleMode: "Normal",
      fontFamily: "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      fontSize: "10",
      noTimeScale: false,
      valuesTracking: "1",
      changeMode: "price-and-percent",
      chartType: "area",
      maLineColor: "#2962FF",
      maLineWidth: 1,
      maLength: 9,
      lineWidth: 2,
      lineType: 0,
      dateRanges: [
        "1d|1",
        "1m|30",
        "3m|60",
        "12m|1D",
        "60m|1W",
        "all|1M"
      ],
      dateFormat: "dd MMM 'yy",
      timeHoursFormat: "24-hours",
      dateRange: "3m"
    });

    container.current.appendChild(script);

    // Cleanup function
    return () => {
      if (container.current) {
        container.current.innerHTML = '';
      }
    };
  }, [symbol, width, height, autosize, theme, style, locale, chartPixelHeight]);

  return (
    <div className="tradingview-widget-container w-full overflow-hidden" style={{ height: autosize ? '100%' : `${totalHeight}px` }}>
      <div ref={container} className="tradingview-widget w-full" style={{ height: chartHeight }} />
      <div className="tradingview-widget-copyright flex h-6 items-center justify-center bg-[hsl(var(--chart-surface))] text-center leading-none">
        <a
          href="https://br.tradingview.com/symbols/USDBRL/"
          rel="noopener nofollow"
          target="_blank"
          className="rounded-sm bg-[hsl(var(--chart-surface))] px-1.5 text-[10px] text-muted-foreground hover:text-primary"
        >
          Dados do TradingView
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;