export const safeFormatDate = (dateString: string | Date | undefined | null, options?: Intl.DateTimeFormatOptions, locale = 'pt-BR'): string => {
  if (!dateString) return 'Data inválida';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Data inválida';
  return date.toLocaleDateString(locale, options);
};
