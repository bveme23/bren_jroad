'use client';

import React, { useState, ChangeEvent } from 'react';

type DojoCount = '1' | '2' | '3';
type ParticipantType = 'u18' | 'adult';

// 利益率（必要に応じてここを 0.25 などに変えれば全体が変わります）
const PROFIT_MARGIN = 0.3;

/**
 * 元の表に記載されている「保険料」列。
 * 想定：各日数プラン（1〜31日）に対する保険料の合計金額。
 */
const INSURANCE_PER_DAY: { [day: number]: number } = {
  1: 800,
  2: 1220,
  3: 1620,
  4: 1950,
  5: 2300,
  6: 2650,
  7: 2960,
  8: 3260,
  9: 3520,
  10: 3790,
  11: 4060,
  12: 4330,
  13: 4620,
  14: 4870,
  15: 5090,
  16: 9420,
  17: 5450,
  18: 9420,
  19: 5950,
  20: 9420,
  21: 6470,
  22: 9420,
  23: 7010,
  24: 9420,
  25: 7580,
  26: 9420,
  27: 8140,
  28: 9420,
  29: 8720,
  30: 9420,
  31: 9420,
};

/**
 * 1日あたりの人件費（2,000円 × 時間数）
 * 1拠点：3時間 → 6,000円
 * 2拠点：6時間 → 12,000円
 * 3拠点：9時間 → 18,000円
 */
const LABOUR_COST_PER_DAY: Record<DojoCount, number> = {
  '1': 6000,
  '2': 12000,
  '3': 18000,
};

/**
 * 1日あたりの施設利用料
 * 1拠点：1,000円/日
 * 2拠点：2,000円/日
 * 3拠点：3,000円/日
 */
const USAGE_FEE_PER_DAY: Record<DojoCount, number> = {
  '1': 1000,
  '2': 2000,
  '3': 3000,
};

function formatYen(value: number): string {
  return value.toLocaleString('ja-JP') + '円';
}

function formatPercent(value: number): string {
  return (value * 100).toFixed(1) + '%';
}

/**
 * プラン全体のコスト計算
 *
 * 想定ロジック：
 * - 保険料は「日数プラン全体」で固定（INSURANCE_PER_DAY[d]）
 * - 人件費は「1日あたり × 日数」
 * - 施設利用料は「1日あたり × 日数」
 */
function calcPlanCost(days: number, dojoCount: DojoCount) {
  const insurance = INSURANCE_PER_DAY[days] ?? 0;
  const labour = LABOUR_COST_PER_DAY[dojoCount] * days;
  const usageFee = USAGE_FEE_PER_DAY[dojoCount] * days;
  const totalCost = insurance + labour + usageFee;
  return { insurance, labour, usageFee, totalCost };
}

/**
 * 利益率30%になるような販売価格を算出
 *
 * (price - cost) / price = PROFIT_MARGIN
 * → price = cost / (1 - PROFIT_MARGIN)
 *
 * 表示上は10円単位で丸める。
 */
function calcPlanPrice(days: number, dojoCount: DojoCount) {
  const { insurance, labour, usageFee, totalCost } = calcPlanCost(days, dojoCount);

  if (!INSURANCE_PER_DAY[days]) {
    return {
      totalPrice: 0,
      insurance,
      labour,
      usageFee,
      profit: 0,
      margin: 0,
    };
  }

  const rawPrice = totalCost / (1 - PROFIT_MARGIN);
  const roundedPrice = Math.round(rawPrice / 10) * 10;
  const profit = roundedPrice - totalCost;
  const margin = roundedPrice > 0 ? profit / roundedPrice : 0;

  return {
    totalPrice: roundedPrice,
    insurance,
    labour,
    usageFee,
    profit,
    margin,
  };
}

/**
 * メインコンポーネント
 */
export function JudoPlanCalculator() {
  const [days, setDays] = useState<number | ''>(1);
  const [dojoCount, setDojoCount] = useState<DojoCount>('1');
  const [participantType, setParticipantType] = useState<ParticipantType>('u18');

  const handleDaysChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === '') {
      setDays('');
      return;
    }
    const numValue = Number(value);
    if (Number.isNaN(numValue)) return;
    if (numValue < 0 || numValue > 31) return;
    setDays(numValue);
  };

  const handleDojoCountChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as DojoCount;
    setDojoCount(value);
  };

  const handleParticipantTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as ParticipantType;
    setParticipantType(value);
  };

  // Convert days to number (0 if empty or 0)
  const daysNum = days === '' || days === 0 ? 0 : days;
  
  const { totalPrice, insurance, labour, usageFee, profit, margin } = calcPlanPrice(
    daysNum,
    dojoCount
  );

  const isValid = daysNum > 0 && !!INSURANCE_PER_DAY[daysNum];

  return (
    <div
      style={{
        maxWidth: 900,
        margin: '0 auto',
        padding: '24px',
        borderRadius: '16px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
        backgroundColor: '#ffffff',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", sans-serif',
      }}
    >
      <h2
        style={{
          fontSize: '1.4rem',
          fontWeight: 700,
          marginBottom: '4px',
        }}
      >
        サービスプラン・料金シミュレーター
      </h2>
      <p style={{ fontSize: '0.9rem', color: '#666666', marginBottom: '20px' }}>
        日数と1日あたりの訪問道場数を選ぶと、想定コストから利益率30％で算出した概算料金が表示されます。
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {/* 左側：入力エリア */}
        <div
          style={{
            flex: '1 1 280px',
            minWidth: 0,
          }}
        >
          {/* 日数 */}
          <div style={{ marginBottom: '16px' }}>
            <label
              htmlFor="days"
              style={{
                display: 'block',
                fontSize: '0.9rem',
                fontWeight: 600,
                marginBottom: '4px',
                color: '#000000',
              }}
            >
              日数
            </label>
            <input
              id="days"
              type="number"
              min={0}
              max={31}
              value={days}
              onChange={handleDaysChange}
              style={{
                width: '100%',
                padding: '8px 10px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                fontSize: '0.95rem',
              }}
            />
            <small style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
              0〜31日の範囲で入力してください（空白も可能）
            </small>
          </div>

          {/* 道場数 */}
          <div style={{ marginBottom: '16px' }}>
            <label
              htmlFor="dojoCount"
              style={{
                display: 'block',
                fontSize: '0.9rem',
                fontWeight: 600,
                marginBottom: '4px',
                color: '#000000',
              }}
            >
              1日あたりの訪問道場数
            </label>
            <select
              id="dojoCount"
              value={dojoCount}
              onChange={handleDojoCountChange}
              style={{
                width: '100%',
                padding: '8px 10px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                fontSize: '0.95rem',
              }}
            >
              <option value="1">1拠点</option>
              <option value="2">2拠点</option>
              <option value="3">3拠点</option>
            </select>
          </div>

          {/* 参加者区分 */}
          <div style={{ marginBottom: '16px' }}>
            <span
              style={{
                display: 'block',
                fontSize: '0.9rem',
                fontWeight: 600,
                marginBottom: '4px',
                color: '#000000',
              }}
            >
              参加者区分
            </span>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                fontSize: '0.9rem',
              }}
            >
              <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <input
                  type="radio"
                  name="participantType"
                  value="u18"
                  checked={participantType === 'u18'}
                  onChange={handleParticipantTypeChange}
                />
                <span>U18（18歳未満）</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <input
                  type="radio"
                  name="participantType"
                  value="adult"
                  checked={participantType === 'adult'}
                  onChange={handleParticipantTypeChange}
                />
                <span>大人</span>
              </label>
            </div>
            <small style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
              現時点ではU18・大人とも同一料金ですが、将来的に割引率を変えることも可能です。
            </small>
          </div>

          {/* 選択内容の要約 */}
          <div
            style={{
              marginTop: '8px',
              padding: '10px 12px',
              borderRadius: '10px',
              backgroundColor: '#f9fafb',
              fontSize: '0.85rem',
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 4 }}>選択中のプラン</div>
            <div style={{ color: '#000000' }}>・日数：{days === '' ? '（未入力）' : `${days}日`}</div>
            <div style={{ color: '#000000' }}>・1日あたりの訪問道場数：{dojoCount}拠点</div>
            <div style={{ color: '#000000' }}>
              ・参加者区分：
              {participantType === 'u18' ? 'U18（18歳未満）' : '大人'}
            </div>
          </div>
        </div>

        {/* 右側：計算結果エリア */}
        <div
          style={{
            flex: '1 1 280px',
            minWidth: 0,
            padding: '16px',
            borderRadius: '12px',
            background:
              'linear-gradient(135deg, rgba(59,130,246,0.06), rgba(16,185,129,0.06))',
            border: '1px solid #e5e7eb',
          }}
        >
          <div style={{ marginBottom: '12px' }}>
            <div
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#6b7280',
                marginBottom: '4px',
              }}
            >
              概算料金（1名あたり）
            </div>
            {daysNum === 0 || days === '' ? (
              <div>
                <div
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: '#666666',
                    marginBottom: '4px',
                  }}
                >
                  {formatYen(0)}
                </div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: '#666666',
                  }}
                >
                  日数を入力してください
                </div>
              </div>
            ) : !isValid ? (
              <div style={{ color: '#ef4444', fontSize: '0.9rem' }}>
                この日数に対応する保険料データが見つかりません。
              </div>
            ) : (
              <div>
                <div
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: '#111827',
                  }}
                >
                  {formatYen(totalPrice)}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
