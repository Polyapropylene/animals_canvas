/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ps_quick_sort.c                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: rrhyhorn <rrhyhorn@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/02/22 15:39:46 by rhyhorn          #+#    #+#             */
/*   Updated: 2022/03/28 19:57:15 by rrhyhorn         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "push_swap.h"

void	quick_sort(int *array, int start, int end)
{
	int	q;

	if (start < end)
	{
		q = partition(array, start, end);
		quick_sort(array, start, q - 1);
		quick_sort(array, q + 1, end);
	}
}

int	partition(int *array, int start, int end)
{
	int	pivot;
	int	i;
	int	temp;
	int	j;

	pivot = array[end];
	i = start - 1;
	j = start;
	while (j < end)
	{
		if (array[j] <= pivot)
		{
			i++;
			temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		j++;
	}
	temp = array[i + 1];
	array[i + 1] = array[end];
	array[end] = temp;
	return (i + 1);
}
