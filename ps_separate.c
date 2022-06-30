/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ps_separate.c                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: rrhyhorn <rrhyhorn@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/02/22 15:18:13 by rrhyhorn          #+#    #+#             */
/*   Updated: 2022/03/28 20:17:04 by rrhyhorn         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "push_swap.h"

void	array_separation(int argc, char **argv, t_data *new)
{
	int		p;
	int		i;
	int		*buff;
	char	**mass;
	int		count_element;

	i = 1;
	while (i < argc)
	{
		p = -1;
		count_element = count_w(argv[i], ' ');
		mass = ft_split(argv[i], ' ');
		buff = (int *)malloc(sizeof(int) * (count_element));
		if (!buff)
			exit(1);
		while (count_element > ++p)
		{
			buff[p] = ft_atoi(mass[p]);
			free(mass[p]);
		}
		free(mass);
		stacking(new, buff, count_element);
		i++;
	}
}

void	stacking(t_data *new, int *buff, int count)
{
	int		i;

	i = -1;
	while (count > ++i)
		new->a[new->count_element + i] = buff[i];
	new->count_element += count;
	free(buff);
}

int	*intarrcpy(int *dst, const int *src, int count)
{
	int		i;

	i = 0;
	while (i < count)
	{
		dst[i] = src[i];
		i++;
	}
	return (dst);
}
