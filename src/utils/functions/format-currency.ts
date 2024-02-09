/**
 *
 * @param value - Valor a ser convertido
 * @returns Retorna o valor convertido para reais
 */

export function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
